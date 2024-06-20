'use client'

import {useProductDetails} from "@/app/[locale]/(pages)/hooks/productHooks";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import {useParams} from "next/navigation";
import React from "react";
import {cn} from "@/lib/utils";
import {useTranslation} from "react-i18next";
import {Button} from "@/components/ui/button";
import {ChevronRight, Facebook, Instagram, Minus, Plus, Twitter} from "lucide-react";
import {Title} from "@/components/common/Title";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {ReviewCard} from "@/app/[locale]/(pages)/components/testimonial";
import useCartStore from "@/store/cart.store";
import {Product} from "@/types/app.types";

export const ProductDetailsViewer = () => {
    const params = useParams();
    const {details} = params;


    const {data, isLoading} = useProductDetails(details as string)
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        // setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const handleChangeSlide = (index: number) => {

        if (!api) {
            return
        }
        setCurrent(index)
        console.log("this is the idn", index)
        console.log("this is the idn", api.selectedScrollSnap())
        api.scrollTo(index, false)
    }
    const {t} = useTranslation('common');
    const [quantity, setQuantity] = React.useState(1)
    const {cart,setCart} = useCartStore()
    return (
        <div className={'grid md:grid-cols-4 gap-x-28 bg-white'}>
            <div className="h-[414px] md:h-auto md:ml-6 flex md:col-span-2 flex-col items-center justify-center">
                <Carousel setApi={setApi} className="my-10">
                    <CarouselContent className={'bg-[#F4F4F4] rounded-2xl '}>
                        {
                            data?.images?.map((image, index) => (
                                <CarouselItem className={'w-full h-full'} key={index}>
                                    <img style={{width: '100%', height: '100%', objectFit: 'contain'}} src={image}
                                         alt={data?.title}/>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                    <div className={'flex w-full items-center justify-center mt-4 gap-x-4'}>
                        {
                            (data?.images.length ?? 0) > 1 ? data?.images.map((image, index) => (
                                <div key={index} onClick={() => {
                                    handleChangeSlide(index)
                                }}
                                     className={cn('size-14 bg-[#F4F4F4] rounded-[8px] flex items-center justify-center', index === current && 'border-2 border-secondary')}>
                                    <div className={'size-10'}>
                                        <img className={'w-full h-full object-cover object-center'} src={image} alt=""/>
                                    </div>
                                </div>
                            )) : null
                        }
                    </div>

                </Carousel>
            </div>
            <div className={'px-4 md:col-span-2 md:space-y-14'}>
                <h4>
                    {data?.sku}
                </h4>

                <Title title={data?.title ?? ''}/>
                <div className={'flex gap-x-2'}>
                    {
                        data?.tags?.map((tag, index) => (
                            <div className={'bg-[#F2F6F4] md:p-4 md:rounded-[8px]'} key={index}>
                                {tag}
                            </div>
                        ))
                    }
                </div>
                <div className="flex  items-center gap-4 mb-5">
                    <span className="text-sm text-[#9D9EA2] line-through md:text-4xl ">
                        ${((data?.price ?? 0) + (((data?.price ?? 0) * (data?.discountPercentage ?? 0)) / 100)).toFixed(2)}
                    </span>
                    <span className="text-base md:text-6xl text-[#EB2606]">
                        ${data?.price}
                    </span>
                </div>
                <div className={"flex  items-center gap-4 mb-5 " +
                    " "}>
                    {
                        Array.from(Array(4)).map((_, index) => (
                            <div key={index}
                                 className={' size-14 md:size-28 text-xl bg-green-200 rounded-md flex items-center justify-center flex-col'}>
                                <h6 className={'text-xs'}>{t(index === 0 ? 'translate_key_weight' : index === 1 ? 'translate_key_height' : index === 2 ? 'translate_key_dept' : 'translate_key_width')}</h6>
                                <div className={'flex items-center justify-center'}>
                                    {index === 0 ? data?.weight : index === 1 ? data?.dimensions?.height : index === 2 ? data?.dimensions?.depth : data?.dimensions?.width}
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div>
                    <h5 className={'text-xl font-semibold mb-8'}>{t('translate_key_description_title')}</h5>
                    <p className={'text-lg text-gray-300'}>
                        {data?.description}
                    </p>
                </div>
                <div className={'border border-b-gray-200 shadow-xl md:mt-16 mt-8 p-6 rounded-xl'}>
                    <div className={'flex justify-between items-center font-semibold md:text-2xl text-md'}>
                        <h4>
                            {data?.title} {data?.weight}kg * {quantity}
                        </h4>
                        <h4>
                            ${((data?.price ?? 0) * quantity).toFixed(2)}
                        </h4>
                    </div>
                    <div className={'flex md:flex-row flex-col justify-between  mt-8 items-center'}>
                        <div
                            className={'flex h-14 w-full md:w-auto md:gap-y-0 gap-y-3   justify-between px-4 rounded-xl items-center md:flex-grow mr-6 border border-gray-200'}>
                            <Button variant="outline" size="icon" onClick={() => setQuantity(quantity - 1)}>
                                <Minus className="h-4 w-4"/>
                            </Button>
                            <div>
                                <span className={'text-primary font-semibold text-xl'}>
                                    {quantity}
                                </span>
                            </div>
                            <Button variant="outline" size="icon" disabled={quantity === data?.stock}
                                    onClick={() => quantity < (data?.stock ?? 0) ? setQuantity(quantity + 1) : {}}>
                                <Plus className="h-4 w-4"/>
                            </Button>
                            <div>
                                <span className={'text-secondary'}>
                                    {data?.availabilityStatus}
                                </span>
                            </div>
                        </div>
                        <button
                            className={'md:w-[250px] w-full md:mt-0 mt-10 !cursor-pointer rounded-full   h-14 bg-secondary text-white flex  items-center justify-center'}
                            onClick={() => setCart([...cart,{quantity:quantity,product:data as Product}]) }>

                            <h5>{t('translate_key_add_to_cart')}</h5>
                            <hr className={'h-8 border mx-8 border-gray-500'}/>
                            <h4> ${((data?.price ?? 0) * quantity).toFixed(2)}</h4>

                        </button>
                    </div>
                </div>
                <Tabs defaultValue="description" className="w-full">
                    <TabsList className="grid h-16 w-full grid-cols-3">
                        {Array.from(Array(3)).map((_, index) => (
                            <TabsTrigger key={index} className={'h-14 rounded-full'}
                                         value={index === 0 ? "description" : index === 1 ? 'review' : 'refer'}>{t(index === 0 ? 'translate_key_description_title' : index === 1 ? 'translate_key_review_title_tabs' : 'translate_key_button_refer', {
                                count: data?.reviews?.length
                            })}</TabsTrigger>
                        ))}

                    </TabsList>
                    <TabsContent value="description" className={'p-4'}>
                       <span className={'text-2xl font-light'}>
                            {data?.description}
                       </span>
                    </TabsContent>
                    <TabsContent value="review">
                        {data?.reviews?.slice(0, 3).map((review) => (
                            <figure key={review.reviewerEmail}
                                    className={cn(
                                        "relative w-64 md:w-full my-5 cursor-pointer overflow-hidden rounded-xl border p-4",
                                        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                                        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
                                    )}
                            >
                                <div className="flex flex-row items-center gap-2 ">
                                    <img className="rounded-full" width="32" height="32" alt=""
                                         src={'/static/icons/star.svg'}/><span
                                    className={'text-primary'}>{review.rating}</span>
                                    <div className="flex flex-col">
                                        <figcaption className="text-sm font-medium dark:text-white">
                                            {review.reviewerName}
                                        </figcaption>
                                        <p className="text-xs font-medium dark:text-white/40">{review.reviewerEmail}</p>
                                    </div>
                                </div>
                                <blockquote className="mt-2 text-sm">{review.comment}</blockquote>
                            </figure>
                        ))}
                        {(data?.reviews?.length ?? 0) < 3 ? <details>
                            <summary>
                                {t('translate_key_show_more')}
                            </summary>
                            {data?.reviews?.slice(3, data?.reviews?.length).map((review) => (
                                <ReviewCard key={review.reviewerEmail} {...review} />
                            ))}
                        </details> : null}
                    </TabsContent>
                    <TabsContent value="refer" className={'p-4'}>
                        <h4 className={'text-2xl font-semibold'}>
                            {t('translate_key_program')}
                        </h4>
                        <p className={'text-lg font-light'}>
                            {t('translate_key_program_description')}
                        </p>
                        <div className={'flex gap-x-4 w-full justify-center items-center mt-10'}>
                            {Array.from(Array(3)).map((_, index) => (
                                <div key={index} className={'size-16 p-4 bg-gray-200 rounded-full flex items-center justify-center '}>
                                    {index === 0 ? <Facebook className={'text-cyan-900'}/> : index === 1 ?
                                        <Twitter className={'text-blue-300'}/> :
                                        <Instagram className={'text-red-400'}/>}
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>

            </div>
        </div>
    )
}