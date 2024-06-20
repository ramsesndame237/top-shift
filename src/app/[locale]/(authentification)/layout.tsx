import React, { ReactNode } from 'react'
import {dir} from "i18next";
import {cn} from "@/lib/utils";
import TanstackProvider from "@/providers/TanstackProvider";
import {TranslationProvider} from "@/providers";
import {Toaster} from "@/components/ui/toaster";
import initTranslations from "@/lib/i18n";
import {TRANSlATIONS_NAMESPACES} from "@/constants";
import {Inter} from "next/font/google";
const inter = Inter({subsets: ["latin"]});

interface LayoutProps {
    children: ReactNode,
    params: {
        locale: string
    }
}

export default async function layout({ children, params: {locale} }: LayoutProps) {
    const {resources} = await initTranslations(locale, TRANSlATIONS_NAMESPACES)
    return (
        <html lang={locale} dir={dir(locale)}>
        <body className={cn(inter.className, "w-full flex justify-center bg-white")}>
        <div className="w-full max-w-[1728px]">
            <TanstackProvider>
                <TranslationProvider
                    locale={locale}
                    resources={resources}
                >
                    {children}
                    <Toaster/>
                </TranslationProvider>
            </TanstackProvider>
        </div>
        </body>
        </html>
    )
}