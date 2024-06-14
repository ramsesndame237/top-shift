"use client";
import {useTranslation} from "react-i18next";
import { format, } from 'date-fns';
import {formatInTimeZone} from "date-fns-tz";
import {useEffect, useState} from "react";

const AnnouncementBannerComponent = () => {

    const now = new Date();
    const [isClient, setIsClient] = useState(false)
    const clientNow = formatInTimeZone(now, 'America/Los_Angeles','HH:mm:ss');
    useEffect(() => {
        setIsClient(true)
    }, []);

const {t} = useTranslation('common');
    return(
        <div className={'h-10 bg-primary w-full px-6 gap-4 text-white text-center flex items-center justify-center'}>
            <h3 className={'opacity-70  text-xs max-w-72 text-nowrap overflow-hidden  text-ellipsis'}>{t('translate_key_announcement_title')}</h3> <span className={'text-xs'}> {clientNow} </span>
        </div>
    )
}

export default AnnouncementBannerComponent