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
import {useState} from "react";

const Drawer = ({open, onClose, categories,handleSelect}: { open: boolean, onClose: () => void, categories: Categories[],handleSelect:(data?:Categories)=>void }) => {
    const {t} = useTranslation("common")
    console.log("this i sthe data",categories)
    const [selectCategory,setSelectCategory] =useState<Categories |undefined>(categories.find(x =>x.slug === 'tops') ?? undefined)
    return (
        <Sheet open={open} onOpenChange={onClose}>
            <SheetTrigger asChild>
                <Button variant="outline">Open</Button>
            </SheetTrigger>
            <SheetContent side={'left'} className={'w-full'}>
                <div className="grid gap-4 py-4">

                    <div>
                        {t('translate_key_filter')}
                    </div>
                    <div>
                        <h4>
                            {t('translate_key_product_catogry')}
                        </h4>
                        <div>
                            <AnimatedList>
                                <RadioGroup defaultValue={'beauty'} value={selectCategory?.name}>
                                    {categories.map((item, idx) => (
                                        <div key={idx} className="flex items-center space-x-2">
                                            <RadioGroupItem onClick={()=>{
                                                setSelectCategory(item)
                                                handleSelect(item)
                                            }} value={item.slug} id="r1"/>
                                            <Label
                                                htmlFor="r1">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </AnimatedList>
                        </div>
                    </div>
                </div>
                <SheetFooter>

                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default Drawer