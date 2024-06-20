import {Inter} from "next/font/google";

import {Metadata} from "next";
import {cn} from "@/lib/utils";
import initTranslations from "@/lib/i18n";
import {ReactNode} from "react";
import {TRANSlATIONS_NAMESPACES} from "@/constants";
import {TranslationProvider} from "@/providers";
import {dir} from "i18next";
import i18nConfig from "@/lib/i18nConfig";
import {Toaster} from "@/components/ui/toaster";
import AnnouncementBannerComponent from "@/components/layout/announcement_banner";
import TheHeader from "@/components/layout/TheHeader";
import TanstackProvider from "@/providers/TanstackProvider";
import TheFooter from "@/components/layout/TheFooter";

const inter = Inter({subsets: ["latin"]});


export const metadata: Metadata = {
    title: "Top Shelf | SHELF",
    description: "This application is and ecommerce .",
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_SITE_URL ?? ""),
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en',
            'fr-FR': '/fr',
        },
    },

};


interface LayoutProps {
    children: ReactNode,
    params: {
        locale: string
    }
}

export function generateStaticParams() {
    return i18nConfig.locales.map(locale => ({locale}));
}

export default async function layout({
                                         children,
                                         params: {locale}
                                     }: LayoutProps) {
    const {resources} = await initTranslations(locale, TRANSlATIONS_NAMESPACES)
    return (
        <html lang={locale} dir={dir(locale)}>
        <body className={cn(inter.className, "w-full flex justify-center bg-white")}>
        <div className="w-full max-w-[1728px] mx-auto">
            <TanstackProvider>
                <TranslationProvider
                    locale={locale}
                    resources={resources}
                >
                    <AnnouncementBannerComponent/>
                    <TheHeader/>
                    {children}
                    <TheFooter />
                    <Toaster/>
                </TranslationProvider>
            </TanstackProvider>
        </div>
        </body>
        </html>
    );
}