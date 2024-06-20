'use client'

import {useTranslation} from "react-i18next";
import {useRouter} from "next/navigation";

export const HeroSection = () => {
    const {t} = useTranslation('common')
    const navigage = useRouter()
    return (
        <div className="space-y-6 md:space-y-10">
            <h3 className="text-sm md:text-lg text-yellow-400 ">
                {t('translate_key_best_seller')}
            </h3>
            <h3 className="text-[32px] md:text-[64px] md:max-w-2xl max-w-sm font-semibold text-white tracking-tight text-wrap">
                {t('translate_key_best_hero_description')}
            </h3>
            <div>
                <p className="text-white md:text-lg text-base font-normal">
                    {t('translate_key_type_product')}
                </p>
            </div>
            <div className="flex items-center gap-x-6 md:!mt-[102px] ">
                <h6 className="text-lg md:text-2xl text-white font-bold">
                    {t('translate_key_get_over')}
                </h6>
                <hr className="border border-[#9D9EA2] h-3"/>
                <h6 className="text-lg md:text-2xl text-white font-bold">
                    {t('translate_key_free_shipping')}
                </h6>
            </div>
            <button onClick={()=>navigage.push('/products')} className="bg-secondary h-14 w-36 rounded-full text-white text-base font-bold">
                {t('translate_key_shop_all_title')}
            </button>
        </div>
    )
}