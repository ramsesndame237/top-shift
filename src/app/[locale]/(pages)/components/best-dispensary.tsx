'use client'
import {useTranslation} from "react-i18next";
import Link from "next/link";
import {useCategory} from "@/app/[locale]/(pages)/hooks/categoryHooks";
import {Categories} from "@/types/app.types";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {useProduct} from "@/app/[locale]/(pages)/hooks/productHooks";
import {ProductCard} from "@/components/common/ProductCard";
import useCategorieStore from "@/store/categorie.store";
import Autoplay from "embla-carousel-autoplay";

export const BestDispensary = () => {
    const {t} = useTranslation('common');

    const limit = 0
    const {data: categories, isLoading} = useCategory()
    const {data: products, isLoading: LoadingProduct} = useProduct(limit)
    const useCategorie = useCategorieStore()

    const [isSelected, setIsSelected] = useState<string | undefined>(undefined)

    useEffect(() => {
        if (categories?.length !== 0 && categories) {
            setIsSelected(categories[0])
            useCategorie.setCategorie(categories.map((item,index)=>({name:item,slug:item,url:'http://'})))
        }
    }, [categories]);
    return (
        <div className={'md:my-8 md:px-4'}>
            <h3 className="text-3xl md:text-[64px] text-center">
                {t('translate_key_dispensary_title')}
            </h3>
            <Carousel className="my-10">
                <CarouselContent>
                    {isLoading ? <div>Loading...</div> :
                        categories?.map((category: string, index: number) => (
                            <CarouselItem key={index} className="basis-1/2 md:basis-1/3 mx-3">
                                <AnimatePresence key={index} mode="wait">
                                    {isSelected === category ? (
                                        <motion.button
                                            className="relative flex h-10  min-w-32 md:min-w-96 items-center w-fit text-nowrap  justify-center overflow-hidden rounded-full  px-5 py-2.5 bg-primary"
                                            onClick={() => setIsSelected(undefined)}
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            exit={{opacity: 0}}
                                        >
                                            <motion.span
                                                key="action"
                                                className="relative block h-full w-full text-sm text-white font-bold"
                                                initial={{y: -50}}
                                                animate={{y: 0}}
                                            >
                                                {category.charAt(0).toUpperCase() + category.slice(1)}
                                            </motion.span>
                                        </motion.button>
                                    ) : (
                                        <motion.button
                                            className="relative flex h-10  min-w-32 md:min-w-96  items-center w-fit text-nowrap  justify-center overflow-hidden rounded-full   border border-b-gray-300  px-5 py-2.5"
                                            onClick={() => setIsSelected(category)}
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            exit={{opacity: 0}}
                                        >
                                            <motion.span
                                                key="reaction"
                                                className="relative block text-sm font-bold"
                                                initial={{x: 0}}
                                                exit={{x: 50, transition: {duration: 0.1}}}
                                            >
                                                {category.charAt(0).toUpperCase() + category.slice(1)}
                                            </motion.span>
                                        </motion.button>
                                    )}
                                </AnimatePresence>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </Carousel>
            <div className={"flex md:hidden flex-wrap gap-x-2 gap-y-8 mb-8"}>
                {
                    products?.products?.filter((product) => product.category === isSelected).slice(0, 6).map((product) => (
                        <div key={product.id} className="w-40 min-h-96">
                            <ProductCard key={product.id} product={product}/>
                        </div>
                    ))
                }
            </div>
            <div className={'md:grid md:grid-cols-3'}>
                <div
                    className="bg-primary w-full min-h-96 relative flex items-center justify-center flex-col rounded-2xl overflow-hidden">
                    <div
                        className="absolute bg-gradient-to-r from-[#34665400] to-[#34665466] -right-12 rounded-2xl rotate-12 -top-5 min-h-72 w-[262px]">
                    </div>
                    <div className="size-[151px]">
                        <img
                            src={products?.products && products.products.length > 0 ? products.products[0].images[0] : '/static/images/paquet_3.png'}
                            alt=""/>
                    </div>
                    <div className="text-white mt-6 flex flex-col items-center justify-center ">
                        <h4 className="font-bold text-xl mb-2 text-center">
                            {t('translate_key_shop_best_title')} : <span>
                        {(products?.products?.length ?? 0) > 0 ? products?.products[0]?.title : null}
                    </span>
                        </h4>
                        <p className="text-md opacity-60 max-w-[216px] max-h-24 overflow-hidden text-ellipsis  text-center">
                            {(products?.products?.length ?? 0) > 0 ? products?.products[0]?.description : null}
                        </p>
                        <Link href="#" className="text-secondary underline mt-2">{t('translate_key_view_all')}</Link>
                    </div>
                </div>
                <div className={'col-span-2 md:block hidden'}>
                    <Carousel className="my-10" plugins={[
                        Autoplay({
                            delay: 2500,
                        }),
                    ]} >
                        <CarouselContent>
                            {isLoading ? <div>Loading...</div> :
                                products?.products?.filter((product) => product.category === isSelected).slice(0, 6).map((product) => (
                                    <CarouselItem key={product.id} className="basis-1/3 mx-3">
                                        <div key={product.id} className="w-72 min-h-96">
                                            <ProductCard key={product.id} product={product}/>
                                        </div>
                                    </CarouselItem>
                                ))
                            }
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>

        </div>
    )
}