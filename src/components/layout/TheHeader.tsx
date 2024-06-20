'use client'
import SearchInputWidget from "@/components/layout/widgets/SearchInputWidget";
import useCartStore from "@/store/cart.store";
import {useRouter} from "next/navigation";
import {useState} from "react";
import CardDrawer from "@/app/[locale]/(pages)/products/components/CardDrawer";

const TheHeader = (props: any) => {
    const {cart} = useCartStore()
    const navigate = useRouter()
    const [showCart,setShowCart]= useState(false)
    return (
        <>
            {
                showCart ? <CardDrawer open={showCart}  onClose={() =>setShowCart(false)} /> : null
            }
            <header
                className="grid grid-cols-2 md:grid-cols-4 w-full min-h-28 gap-x-10 mb:pb-0 pb-4content-center place-content-center place-items-stretch  ">
                <div className={'flex items-center justify-start  md:pl-6 pl-2 py-4 gap-x-2 '}>
                    <div className={'md:hidden flex items-center justify-center size-14 md:size-20'}>
                        <img src="/static/icons/menu.svg" alt="menu amburger" loading="lazy"/>
                    </div>
                    <div className={'size-14 md:size-20 flex items-center justify-center'}>
                        <img className={'size-full object-contain object-center'} src="/static/images/logo.png"
                             alt="logo the top sheft"/>
                    </div>
                </div>
                <div
                    className={'w-full h-full hidden items-center md:flex justify-center py-3 col-span-2  pl-6 '}>
                    <SearchInputWidget/>
                </div>
                <div className={'flex h-full  py-4 pr-6 items-center justify-center'}>
                    <h6 className={'text-[10px] md:text-base'} onClick={() => navigate.push('/login')}>
                        Your Account
                    </h6>
                    <hr className={'h-3 mx-4 border border-gray-500'}/>
                    <div className={'relative flex size-6'} onClick={()=>setShowCart(true)}>
                        <img src="/static/icons/bag-2.svg" alt=""/>
                        <div
                            className={'bg-red-600 absolute bottom-1 -right-1 size-4 rounded-full text-white text-[8px] flex items-center justify-center'}>
                            <span>{cart.length}</span>
                        </div>
                    </div>
                </div>
                <div
                    className={'w-full flex items-center md:hidden justify-center py-3 col-span-2 border-t-2 px-6 border-gray-300'}>
                    <SearchInputWidget/>
                </div>
            </header>
        </>

    )
}

export default TheHeader;