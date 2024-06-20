'use client'
import {Title} from "@/components/common/Title";
import {useTranslation} from "react-i18next";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import useProductStore from "@/store/product.store";
import {Product} from "@/types/app.types";
import {ProductCard} from "@/components/common/ProductCard";
import Autoplay from "embla-carousel-autoplay";
import {cn} from "@/lib/utils";

export const ProductSelect = ({title,nameCategorie,className}:{title?:string,nameCategorie?:string,className?:string}) => {
    const {t} = useTranslation('common');
    const useProduct = useProductStore()
    return (
        <div className={cn("bg-white px-4 text-center my-8 md:my-16", className && className)}>
            <Title title={title ? title : t('translate_key_choose_product')}></Title>

            <Carousel  plugins={[
                Autoplay({
                    delay: 2500,
                }),
            ]}  className="my-10">
                <CarouselContent>
                    {useProduct.product.filter(item => item.category === (nameCategorie ??  'tops'))?.map((product: Product) => (
                        <CarouselItem key={product.id}  className="md:basis-1/3 cursor-pointer md:mx-3">
                            <ProductCard  product={product} big={true}/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    )
}