'use client'

import {useTranslation} from "react-i18next";
import {Title} from "@/components/common/Title";

export const HolderSection = () => {
    const {t} = useTranslation('common')
    return (
        <div className={'text-white pt-[183px]'}>
            <div
                className="w-[342px] bg-[#05422C] rounded-2xl overflow-hidden  h-[268px] bg-[url('/static/images/mask.png')] bg-cover absolute -top-44 px-6 py-10   ">
              <Title title={t('translate_key_refer_title')}></Title>
                <div className={'mt-6'}>
                    {t('translate_key_get')} <span className={'text-yellow-400'}>$30</span>
                </div>
                
                <button className={'bg-secondary h-14 w-[165px] rounded-full mt-10'}>
                    {t('translate_key_button')}
                </button>
            </div>
            <Title title={t('translate_key_holding')}></Title>
        </div>
    )
}