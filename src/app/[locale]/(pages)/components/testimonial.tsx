'use client'
import {useTranslation} from "react-i18next";
import {Title} from "@/components/common/Title";
import {cn} from "@/lib/utils";
import Marquee from "@/components/common/Marquee";
import useProductStore from "@/store/product.store";
import {Review} from "@/types/app.types";

export const Testimonial = () => {
    const {t} = useTranslation('common')
    const useProduct = useProductStore()
    const reviews = useProduct.product.flatMap(product => product.reviews)
    return (
        <div className={'md:px-4 md:py-8 bg-white'}>
            <Title title={t('translate_key_testimonial_title')}></Title>
            <div className={'w-full bg-primary h-[348px] md:hidden rounded-2xl text-white p-6 my-8'}>
                <h5 className={'text-2xl font-semibold max-w-[274px]'}>{t('translate_key_testimonial_shop_title')}</h5>
                <hr className={'my-8'}/>
                <div className={'mb-8'}>
                    <img src="/static/icons/google-logo.svg" alt=""/>
                </div>
                <p>
                    EXELLENCET
                </p>
                <div className={'flex items-center gap-6 mt-4'}>
                    <div className={'flex'}>
                        {
                            Array.from(Array(5).keys()).map((item, index) => (
                                <img key={index} src="/static/icons/star.svg" alt=""/>
                            ))
                        }
                    </div>
                    <hr className={'border border-[#648A7C] h-3'}/>
                    <p>{t('translate_key_on')} 135 <span>{t('translate_key_review')}</span></p>
                </div>
            </div>
            <div className={'md:grid md:grid-cols-3 md:gap-x-2'}>
                <div className={'w-full border-border-red-500 col-span-1 bg-primary h-[348px] hidden md:block rounded-2xl text-white p-6 my-8'}>
                    <h5 className={'text-2xl font-semibold max-w-[274px]'}>{t('translate_key_testimonial_shop_title')}</h5>
                    <hr className={'my-8'}/>
                    <div className={'mb-8'}>
                        <img src="/static/icons/google-logo.svg" alt=""/>
                    </div>
                    <p>
                        EXELLENCET
                    </p>
                    <div className={'flex items-center gap-6 mt-4'}>
                        <div className={'flex'}>
                            {
                                Array.from(Array(5).keys()).map((item, index) => (
                                    <img key={index} src="/static/icons/star.svg" alt=""/>
                                ))
                            }
                        </div>
                        <hr className={'border border-[#648A7C] h-3'}/>
                        <p>{t('translate_key_on')} 135 <span>{t('translate_key_review')}</span></p>
                    </div>
                </div>
                <div
                    className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden md:col-span-2  py-20 ">
                    <Marquee pauseOnHover className="[--duration:1220s]">
                        {reviews.slice(0, (reviews.length / 2)).map((review) => (
                            <ReviewCard key={review.reviewerEmail} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:1220s]">
                        {reviews.slice(reviews.length / 2).map((review) => (
                            <ReviewCard key={review.reviewerName} {...review} />
                        ))}
                    </Marquee>
                    <div
                        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                    <div
                        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
                </div>

            </div>


        </div>
    )
}

export const ReviewCard = ({reviewerName, reviewerEmail, date, rating, comment}: Review) => {
    return (
        <figure
            className={cn(
                "relative w-64 md:w-72  cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2 ">
                <img className="rounded-full" width="32" height="32" alt="" src={'/static/icons/star.svg'}/><span
                className={'text-primary'}>{rating}</span>
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {reviewerName}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{reviewerEmail}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{comment}</blockquote>
        </figure>
    );
};