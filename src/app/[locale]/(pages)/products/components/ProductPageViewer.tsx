'use client'
import {useTranslation} from "react-i18next";
import {cn} from "@/lib/utils";
import {Title} from "@/components/common/Title";
import {ProductSelect} from "@/app/[locale]/(pages)/components/product-select";
import {useState} from "react";
import {Categories, Product} from "@/types/app.types";
import Drawer from "@/app/[locale]/(pages)/products/widgets/Drawer";
import {useCategory} from "@/app/[locale]/(pages)/hooks/categoryHooks";
import useCategorieStore from "@/store/categorie.store";
import {CarouselItem} from "@/components/ui/carousel";
import {ProductCard} from "@/components/common/ProductCard";
import useProductStore from "@/store/product.store";

interface ServiceInterface {
    title: string,
    icon: string
}

const ProductPageViewer = () => {
    const service: ServiceInterface[] = [
        {
            title: 'translate_key_service_1',
            icon: 'truck-fast.svg'
        },
        {
            title: 'translate_key_service_2',
            icon: 'safe-home.svg'
        },
        {
            title: 'translate_key_service_3',
            icon: 'coin.svg'
        }
    ]
    const {t} = useTranslation('common')
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const  useCategory = useCategorieStore()
    const useProduct = useProductStore()
    const [categorySelected, setCategorySelected] = useState<Categories |undefined>(useCategory.categorie?.length !== 0 ? useCategory.categorie.find(x => x.slug === 'beauty') : undefined);
    return (
        <>
            {
                showMenu ? <Drawer open={showMenu} onClose={()=>setShowMenu(false)} categories={useCategory.categorie.filter(x=>x.name !== 'tops') ?? []} handleSelect={(value)=>{
                    setCategorySelected(value)
                    setShowMenu(false)
                }} /> : null
            }
            <div>
                <div className={'h-[114px] flex bg-[#F2F6F4] p-4 '}>
                    {
                        service.map((item: ServiceInterface, index) => (
                            <div key={index} className={'flex'}>
                                <div className={'w-[86px] text-sm'}>
                                    <div
                                        className={'flex items-center bg-white size-8 mb-2 rounded-full justify-center'}>
                                        <div className={'size-[18px]'}>
                                            <img src={`/static/icons/${item.icon}`}
                                                 alt="service to e commerce plateforme "/>
                                        </div>

                                    </div>
                                    <div>
                                        <p>
                                            {t(item.title)}
                                        </p>
                                    </div>
                                </div>
                                {index === service.length - 1 ? null :
                                    <hr className={'h-6 border border-[#C3D2CC] mx-5'}/>}
                            </div>
                        ))
                    }
                </div>
                <div className={'flex py-5 pl-5'}>
                    <h4>{t('translate_key_shop_title')}</h4>
                    <div className={'flex mx-14 gap-3'}>
                        {['translate_key_filter', 'translate_key_short_by'].map((item, index) => (
                            <button
                                onClick={() => index === 0 ? setShowMenu(true) : {}}
                                key={index}
                                className={cn('w-fit flex h-8 border border-[#F4F4F4] text-xs px-3.5 py-1 rounded-full items-center justify-center', index === 1 && 'w-40')}>
                                {t(item)}
                                <img src="/static/icons/arrow-down.svg" alt="arrow define"/>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <div >
                    <ProductSelect className={'bg-primary text-white md:p-8'}
                                   title={t('translate_key_top_selling', {name: 'Tops'})}/>
                </div>
                <div className={'px-4 text-center my-8'}>
                    <Title
                        title={t('translate_key_top_selling', {name: categorySelected ? (categorySelected?.name.charAt(0).toUpperCase() + (categorySelected?.name?.slice(1) ?? '')) : 'Beauty'})}/>
                    <div className={'flex flex-col md:grid md:grid-cols-3 gap-x-14 gap-y-14 mt-8'}>
                        {useProduct.product.filter(item => item.category === (categorySelected?.name ?? 'beauty'))?.map((product: Product) => (
                            <div key={product.id}>
                                <ProductCard product={product} big={true}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPageViewer;