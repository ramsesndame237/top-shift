import SearchInputWidget from "@/components/layout/widgets/SearchInputWidget";

const TheHeader = (props: any) => {
    return (
        <header className="grid grid-cols-2 w-full h-28 gap-x-10 pb-4  ">
            <div className={'flex items-center justify-center  py-4 gap-x-2 pl-6'}>
                <img src="/static/icons/menu.svg" alt="menu amburger" loading="lazy"/>
                <div>
                    <img src="/static/images/Logo.png" alt="logo the top sheft"/>
                </div>
            </div>
            <div className={'flex h-full  py-4 pr-6 items-center justify-between'}>
                <span className={'text-ternary'}>
                  Your Account
                </span>
                <hr className={'h-3 border border-gray-500'}/>
                <div className={'relative flex size-6'}>
                    <img src="/static/icons/bag-2.svg" alt=""/>
                    <div className={'bg-red-600 absolute bottom-1 -right-1 size-4 rounded-full text-white text-[8px] flex items-center justify-center'}>
                        <span>0</span>
                    </div>
                </div>
            </div>
            <div className={'w-full flex items-center justify-center py-3 col-span-2 border-t-2 px-6 border-gray-300'}>
                <SearchInputWidget />
            </div>
        </header>
    )
}

export default TheHeader;