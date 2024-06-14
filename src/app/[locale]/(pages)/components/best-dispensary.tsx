'use client'
import {useTranslation} from "react-i18next";
import Link from "next/link";
import {useCategory} from "@/app/[locale]/(pages)/hooks/categoryHooks";
import {Categories} from "@/types/app.types";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";

export const BestDispensary = () => {
    const {t} = useTranslation('common');

    const {data: categories, isLoading} = useCategory()

    const [isSelected, setIsSelected] = useState<string | undefined>(undefined)
    return (
        <div>
            <h3 className="text-3xl text-center">
                {t('translate_key_dispensary_title')}
            </h3>
            <Carousel>
                <CarouselContent>
                    {isLoading ? <div>Loading...</div> :
                        categories?.map((category: string, index: number) => (
                            <CarouselItem className="basis-1/2 mx-3">
                                <AnimatePresence key={index} mode="wait">
                                    {isSelected === category ? (
                                        <motion.button
                                            className="relative flex h-10  min-w-32  items-center w-fit text-nowrap  justify-center overflow-hidden rounded-full  px-5 py-2.5 bg-primary"
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
                                            className="relative flex min-w-40 h-10 cursor-pointer text-nowrap w-fit items-center overflow-hidden text-ellipsis whitespace-nowrap justify-center rounded-full border border-b-gray-300  px-5 py-2.5"
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

            <div
                className="bg-primary w-full min-h-96 relative flex items-center justify-center flex-col rounded-2xl overflow-hidden">
                <div
                    className="absolute bg-gradient-to-r from-[#34665400] to-[#34665466] -right-12 rounded-2xl rotate-12 -top-5 min-h-72 w-[262px]">
                </div>
                <div className="size-[151px]">
                    <img src="/static/images/paquet_3.png" alt=""/>
                </div>
                <div className="text-white mt-6 flex flex-col items-center justify-center ">
                    <h4 className="font-bold text-xl mb-2">
                        {t('translate_key_shop_best_title')}
                    </h4>
                    <p className="text-md opacity-60 max-w-[216px] text-center">
                        Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius lorem blandit lectus magnis
                        feugiat.
                    </p>
                    <Link href="#" className="text-secondary underline mt-2">{t('translate_key_view_all')}</Link>
                </div>

            </div>
        </div>
    )
}