import {create} from "zustand";
import {Product} from "@/types/app.types";
import {createStore, localPersistStorage} from "@/store/store-utilis";


interface ProductState {
    product: Product[],
    setProduct:(data:Product[]) =>Promise<void>
}

const useProductStore =createStore<ProductState>((set)=>({
    product:[],
    setProduct:async (data:Product[]) => {
        set({product:data})
    }
}),{
    devtoolsEnabled: true,
    persistOptions: {
        name: 'product-list',
        storage: localPersistStorage,
    },
})
export default useProductStore;