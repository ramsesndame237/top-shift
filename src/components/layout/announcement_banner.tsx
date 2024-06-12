const AnnouncementBannerComponent = () => {
const date = new Date();
    return(
        <div className={'h-10 bg-primary w-full text-white text-center flex items-center justify-center'}>
            <h3 className={'opacity-70  text-xs max-w-72 text-nowrap overflow-hidden  text-ellipsis'}>LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.</h3> <span className={'text-xs'}> {date.toLocaleTimeString()} </span>
        </div>
    )
}

export default AnnouncementBannerComponent