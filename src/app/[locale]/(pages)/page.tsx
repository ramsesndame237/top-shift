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
                className="min-h-screen md:px-16 flex flex-col  md:bg-[url('/static/images/bg_images_md.png')] bg-[url('/static/images/bg_images.png')] bg-center bg-cover md:bg-right  bg-no-repeat  py-14 px-6 overflow-x-hidden">
                <HeroSection/>
            </section>
            <section className="h-auto bg-[#F2F6F4] py-16 px-2  overflow-x-hidden">
                <ServicesSection/>
            </section>
            <section className={'h-auto md:py-20 bg-white px-3.5 font-semibold overflow-x-hidden'}>
                <BestDispensary/>
            </section>
            <section className={'px-2 bg-white  md:py-20 h-auto overflow-x-hidden'}>
                <ProductSelect/>
            </section>
            {/*<section className={'px-2 bg-primary min-h-screen relative'}>*/}
            {/*    <HolderSection></HolderSection>*/}
            {/*</section>*/}
            <section className={'px-2 overflow-x-hidden'}>
                <Testimonial/>
            </section>
        </>
    )
}

export default page;