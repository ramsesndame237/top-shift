'use client'
import {useTranslation} from "react-i18next";
import Link from "next/link";
import {useCategory} from "@/app/[locale]/(pages)/hooks/categoryHooks";
import {Categories} from "@/types/app.types";

export const BestDispensary = () => {
    const {t} = useTranslation('common');

   const  {data:categories,isLoading} = useCategory()

    return (
        <div>
            <h3 className="text-3xl text-center">
                {t('translate_key_dispensary_title')}
            </h3>
            <div className="border border-red-500 ">
                {isLoading ? <div>Loading...</div> :
                 categories?.map((category:string,index:number) => (
                     <button key={index} className="border-1 border-gray-400 h-10">
                         {category}
                     </button>
                 ))
                }

            </div>

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
                        Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius lorem blandit lectus magnis feugiat.
                    </p>
                    <Link href="#" className="text-secondary underline mt-2">{t('translate_key_view_all')}</Link>
                </div>

            </div>
        </div>
    )
}