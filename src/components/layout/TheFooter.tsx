'use client'
import {useTranslation} from "react-i18next";
import Link from "next/link";
import {Title} from "@/components/common/Title";

interface QuickLink {
    text: string;
    url: string;
}

const TheFooter = () => {
    const {t} = useTranslation('common')
    const quickLink: QuickLink[] = [
        {
            text: 'translate_key_title_1',
            url: '/'
        },
        {
            text: 'translate_key_title_2',
            url: '/'
        },
        {
            text: 'translate_key_title_3',
            url: '/'
        },
        {
            text: 'translate_key_title_4',
            url: '/'
        },
        {
            text: 'translate_key_title_5',
            url: '/'
        },
        {
            text: 'translate_key_title_6',
            url: '/'
        },
        {
            text: 'translate_key_title_7',
            url: '/'
        },
        {
            text: 'translate_key_title_8',
            url: '/'
        },

    ]
    const footerLink: QuickLink[] = [
        {
            text: 'translate_key_title_9',
            url: '/'
        },
        {
            text: 'translate_key_title_10',
            url: '/'
        },
        {
            text: 'translate_key_title_11',
            url: '/'
        },


    ]
    return (
        <footer className="bg-gradient-to-r from-[#1A1E26] to-[#01100B] text-white px-6 md:px-12 mt-44 pt-56 md:mt-60 relative">
            <div className="h-[356px] md:py-8 md:gap-y-6 px-6 bg-primary md:bg-[url('/static/images/background_footer.png')] md:bg-no-repeat  w-[342px] md:w-full md:max-w-5xl md:bg-cover absolute -top-52 left-2 md:left-40 rounded-3xl">
                <Title title={t('transalte_key_unlock_bonus')}/>
                <p className={'text-sm my-3'}>
                    {t('translate_key_description')}
                </p>
                <div className={'mt-12'}>
                    <input placeholder={'johndooe@gmail.com'} type="text"
                           className={'border border-[#346654] px-6 w-full mb-4 rounded-full h-14 bg-transparent'}/>
                    <button className={'h-14 bg-secondary w-full rounded-full'}>
                        {t('translate_key_reveal_coupon')}
                    </button>
                </div>
            </div>
            <div>
                <div>
                    <img src="/static/icons/logo.png" alt=""/>
                </div>
                <p className={'text-base font-normal'}>
                    {t('translate_key_entreprise_description')}
                </p>
                <h4 className={'text-xl font-bold mt-8'}>
                    {t('translate_Key_title_quick_link')}
                </h4>
                <div className={'grid  grid-cols-2 gap-x-6 text-xs gap-y-6 mt-3'}>
                    {
                        quickLink.map((item: QuickLink) => (
                            <div key={item.text}>
                                <Link href={item.url}>
                                    {t(item.text)}
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <h4 className={'text-xl font-bold mt-8'}>
                    {t('translate_key_contact_us')}
                </h4>
                <span>njohndamevictorlucien@gmail.com
                </span>
                <div className={"flex gap-x-4 md:w-full md:items-center md:justify-center  my-8"}>
                    {
                        Array.from(Array(4).keys()).map((_, i) => (
                            <div key={i} className={'w-14 h-8 md:w-28 md:h-16 bg-white flex items-center justify-center rounded-[6px]'}>
                                <img
                                    src={"/static/icons/" + '' + (i === 0 ? 'mastercard.svg' : i === 1 ? 'visa.svg' : i === 2 ? 'bitcoin.svg' : 'interact.svg')}
                                    alt=" payment service"/>

                            </div>

                        ))
                    }
                </div>
                <hr/>
                <div className={'flex text-xs mt-8 gap-x-4'}>
                    {footerLink.map((item) => (
                        <div key={item.text}>
                            <Link href={item.url}>
                                {t(item.text)}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default TheFooter