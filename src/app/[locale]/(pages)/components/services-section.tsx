'use client'

import {useTranslation} from "react-i18next";

interface ServiceInterface {
    title:string,
    description:string,
    icon:string
}
export const ServicesSection = () =>{
    const {t} = useTranslation('common')
    const serviceData:ServiceInterface[] =[
        {
            title:'translate_key_reliable_shipping_title',
            description:'translate_key_reliable_shipping_description',
            icon:'truck-fast'
        },
        {
            title:'translate_key_reliable_save_title',
            description:'translate_key_reliable_save_description',
            icon:'safe-home'
        },
        {
            title:'translate_key_reliable_quality_title',
            description:'translate_key_reliable_quality_description',
            icon:'coin'
        },
    ]
    return(
        <div className={'space-y-8 bg-[#F2F6F4] '}>
            {
                serviceData.map((service:ServiceInterface,index)=>(
                    <div className="min-h-[147px] flex w-[342px] gap-x-6" key={index}>
                        <div>
                            <div className="size-16 bg-white rounded-full shadow-sm flex items-center justify-center">
                                <img src={`/static/icons/${service.icon}.svg`} alt=""/>
                            </div>

                        </div>
                        <div>
                            <h4 className={'text-xl text-[#1A1E26] font-bold'}>
                                {t(service.title)}
                            </h4>
                            <p className={'text-sm font-normal text-[#717378]'}>
                                {t(service.description)}
                            </p>
                        </div>

                    </div>
                ))
            }

        </div>
    )
}