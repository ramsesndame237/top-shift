'use client'
import {cn} from "@/lib/utils";
import {useTranslation} from "react-i18next";
import {Product} from "@/types/app.types";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import {useRouter} from "next/navigation";
export const ProductCard = ({product,big}: { product: Product,big?:boolean }) => {

    const {t} = useTranslation('common');
    const navigate = useRouter()
    return (
        <div className="w-full h-full cursor-pointer" onClick={()=>navigate.push('/products/' + product.id)}>
            <div className={cn('bg-[#F4F4F4] min-h-40 rounded-[8px] flex items-center justify-center',big && ' max-h-60 h-60')}>
                <Carousel  plugins={big ? [] :[
                    Autoplay({
                        delay: 2500,
                    })
                ]} className="my-10">
                    <CarouselContent>
                        {
                            product.images?.map((image,index)=>(
                                <CarouselItem className={cn('size-[120px]  ',big && '!size-[164px]')}   key={index}>
                                    <img style={{width:'100%',height:'100%',objectFit:'contain'}} src={image} alt={product.title}/>
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                </Carousel>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h4 className={cn('text-xs text-gray-400',big && '!text-sm')}>
                    {product.brand}
                </h4>
                <h4 className={cn('text-base text-center text-[#1A1E26]',big && '!text-xl')}>
                    {product.title}
                </h4>
                <div className="flex items-center justify-center my-2 ">
                    <span className={cn("flex items-center justify-center  text-xs",big && '!text-sm')}>
                        <div className="mr-2">
                            <img src="/static/icons/star.svg" alt=""/>
                        </div>
                        {product.rating}/5
                    </span>
                    <hr className="border border-gray-200 h-3 mx-2"/>
                    <span className={cn("flex items-center justify-center  text-xs",big && '!text-sm')}>
                        {product.reviews.length} <span
                        className={cn("text-xs font-light text-[#C8C9CB] ml-1",big && "!text-sm")}>{t('translate_key_review_title')}</span>
                    </span>
                </div>
                <div className="w-24 h-8 bg-[#F2F6F4] flex items-center justify-center text-primary text-xs mb-5">
                    {product.discountPercentage} %
                </div>
                <div className="flex  items-center gap-4 mb-5">
                    <span className="text-sm text-[#9D9EA2] line-through ">
                        ${(product.price + ((product.price * product.discountPercentage) / 100)).toFixed(2)}
                    </span>
                    <span className="text-base text-[#EB2606]">
                        ${product.price}
                    </span>
                </div>
                <div className="flex mb-5">
                    {Array.from(Array(3)).map((_,index) => (
                        <div
                            className={cn('w-[38px] border h-[26px] border-[#F4F4F4] text-[10px] flex items-center justify-center',big && 'w-[42px] h-[32px] ')} key={index}>{
                            index === 0 ? product.weight +'g': index === 1 ? product.stock:product.dimensions.height.toFixed(0) + '/' + product.dimensions.width.toFixed(0)
                        } </div>
                    ))}
                </div>
                <button
                    className="h-10 bg-secondary px-6 py-3 text-white flex items-center justify-center rounded-full">
                    {t('translate_key_add_to_cart')}
                </button>
            </div>

        </div>
    )
}