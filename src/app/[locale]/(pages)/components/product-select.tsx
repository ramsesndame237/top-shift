'use client'
import {Title} from "@/components/common/Title";
import {useTranslation} from "react-i18next";

export const ProductSelect = () =>{
    const {t} = useTranslation('common');
    return(
        <div>
            <Title title={t('translate_key_choose_product')}></Title>
        </div>
    )
}