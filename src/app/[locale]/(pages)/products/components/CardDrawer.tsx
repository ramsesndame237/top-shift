import {Button} from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import {Input} from "postcss";
import {useTranslation} from "react-i18next";
import {AnimatedList} from "@/app/[locale]/(pages)/products/widgets/AnimateList";
import {Categories} from "@/types/app.types";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import {useEffect, useState} from "react";
import SecureLS from "secure-ls";
import {useCart} from "@/app/[locale]/(pages)/hooks/cartHooks";
import useCartStore from "@/store/cart.store";
import {Title} from "@/components/common/Title";
import {LoadingSpinner} from "@/components/common/Loader";

const ls = new SecureLS({encodingType: 'aes'});


const CardDrawer = ({open, onClose,}: {
    open: boolean,
    onClose: () => void,
}) => {
    const {t} = useTranslation("common")
    const user = ls.get("user");
    console.log("this is the user", user)
    const {data: cartData, isLoading} = useCart(user?.id)
    const {cart} = useCartStore()

    return (
        <Sheet open={open} onOpenChange={onClose}>

            <SheetContent  side={'right'} className={'md:w-[800px]  md:!max-w-2xl '}>
                <div className="grid gap-4 py-4">

                   <Title title={t('translate_key_title_cart')}  />
                    <div>
                        <div>
                            {
                                isLoading ? <LoadingSpinner className={'size-40 text-primary'} /> : (cartData?.carts.products ?? []).length !== 0 ?
                                    <AnimatedList>

                                        {
                                            cartData?.carts?.products.map((item, index) => (
                                                <div key={index}>
                                                    <div>
                                                        <img src={item.images[0]} alt=""/>
                                                    </div>
                                                    <div>
                                                        <h4>
                                                            {item.title}
                                                        </h4>
                                                        <p className={'flex items-center justify-between'}>
                                                            {item.quantity}x {item.price} <p>
                                                            {item.total}
                                                        </p>
                                                        </p>

                                                    </div>
                                                    <div>
                                                        ldodkd
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </AnimatedList> :
                                    <div className={'w-full min-h-96 flex items-center justify-center'}>
                                        <div
                                            className={'size-40 rounded-full bg-green-200 flex items-center justify-center p-8'}>
                                            <img className={'w-full h-full object-contain'}
                                                 src="/static/icons/bag-2.svg"
                                                 alt="badge"/>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                <SheetFooter >
                    <button className={'bg-primary text-white  h-14 w-full'}>
                        {t('translate_key_cart_save')}
                    </button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default CardDrawer