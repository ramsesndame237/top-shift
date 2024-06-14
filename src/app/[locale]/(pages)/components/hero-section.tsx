'use client'

import {useTranslation} from "react-i18next";

export const HeroSection = () => {
    const {t} = useTranslation('common')
    return (
        <div className="space-y-6">
            <h3 className="text-sm text-yellow-400 ">
                {t('translate_key_best_seller')}
            </h3>
            <h3 className="text-[32px] max-w-sm font-semibold text-white tracking-tight text-wrap">
                {t('translate_key_best_hero_description')}
            </h3>
            <p className="text-white text-base font-normal">
                {t('translate_key_type_product')}
            </p>
            <span className="flex items-center gap-x-6 ">
                <h6 className="text-lg text-white font-bold">
                    {t('translate_key_get_over')}
                </h6>
                <hr className="border border-[#9D9EA2] h-3"/>
                <h6 className="text-lg text-white font-bold">
                    {t('translate_key_free_shipping')}
                </h6>
            </span>
            <button className="bg-secondary h-14 w-36 rounded-full text-white text-base font-bold">
                {t('translate_key_shop_all_title')}
            </button>
        </div>
    )
}