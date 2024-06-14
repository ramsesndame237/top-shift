import {HeroSection} from "@/app/[locale]/(pages)/components/hero-section";
import {cn} from "@/lib/utils";
import {ServicesSection} from "@/app/[locale]/(pages)/components/services-section";
import {BestDispensary} from "@/app/[locale]/(pages)/components/best-dispensary";
import {Testimonial} from "@/app/[locale]/(pages)/components/testimonial";
import {Title} from "@/components/common/Title";
import {ProductSelect} from "@/app/[locale]/(pages)/components/product-select";
import {HolderSection} from "@/app/[locale]/(pages)/components/holder-section";


const page = () => {
    return (
        <>
            <section
                className="min-h-screen flex flex-col  bg-[url('/static/images/bg_images.png')] bg-center bg-cover over pt-14 px-6">
                <HeroSection/>
                <div className="w-full flex-grow relative  ">
                    {
                        Array.from(Array(3).keys()).map((_, i) => (
                            <div
                                className={cn('size-[108px] absolute', (i + 1) === 1 ? 'left-1/3' : (i + 1) === 2 ? 'top-1/3 right-3' : 'bottom-1/4 -left-6')}
                                key={i}>
                                <img src={`/static/images/paquet_${i + 1}.png`} alt="paquet produit"/>
                            </div>
                        ))
                    }

                </div>
            </section>
            <section className="h-auto bg-[#F2F6F4] py-16 px-2  ">
                <ServicesSection/>
            </section>
            <section className={'h-auto bg-white px-3.5 font-semibold'}>
                <BestDispensary/>
            </section>
            <section className={'px-2'}>
                <Testimonial/>
            </section>
            <section className={'px-2'}>
                <ProductSelect/>
            </section>
            <section className={'px-2 bg-primary min-h-screen relative'}>
                <HolderSection></HolderSection>

            </section>
        </>
    )
}

export default page;