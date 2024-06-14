'use client'
import {useTranslation} from "react-i18next";
import {Title} from "@/components/common/Title";

export const Testimonial = () => {
    const {t} = useTranslation('common')
    return (
        <div>
            <Title title={t('translate_key_testimonial_title')}></Title>

            <div className={'w-full bg-primary h-[348px] rounded-2xl text-white p-6'}>
                <h5 className={'text-2xl font-semibold max-w-[274px]'}>{t('translate_key_testimonial_shop_title')}</h5>
                <hr className={'my-8'}/>
                <div className={'mb-8'}>
                    <img src="/static/icons/google-logo.svg" alt=""/>
                </div>
                <p>
                    EXELLENCET
                </p>
                <div className={'flex items-center gap-6 mt-4'}>
                    <div className={'flex'}>
                        {
                            Array.from(Array(5).keys()).map((item, index) => (
                                <img key={index} src="/static/icons/star.svg" alt=""/>
                            ))
                        }
                    </div>
                    <hr className={'border border-[#648A7C] h-3'}/>
                    <p>{t('translate_key_on')} 135 <span>{t('translate_key_review')}</span> </p>
                </div>
            </div>
        </div>
    )
}