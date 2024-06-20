import {ProductDetailsViewer} from "@/app/[locale]/(pages)/products/components/ProductDetailsViewer";
import {useSearchParams} from "next/navigation";


const ProductDetails = () => {

    return (
        <section className={'pb-40'}>
            <ProductDetailsViewer />
        </section>
    )
}

export default ProductDetails