import AnnouncementBannerComponent from "@/components/layout/announcement_banner";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between   ">
            <section
                className="bg-primary bg-[url('/static/images/bg_images.png')] bg-cover bg-no-repeat bg-center text-white  h-svh w-full  ">
                <span className={'text-'}>
                    Best Seller
                </span>
                <h3>
                    BEST DISPENSARY TO BUY WEED ONLINE
                </h3>
                <span>
                    Vitamins & Supplements
                </span>
                <div className={'flex items-center '}>
                    <span>
                        Get 25% off
                    </span>
                    <hr className={'border h-4'}/>
                     <span>
                        Free Shipping
                    </span>
                </div>
            </section>

        </main>
    );
}
