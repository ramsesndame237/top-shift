import {create} from "zustand";
import {Product} from "@/types/app.types";
import {createStore, localPersistStorage} from "@/store/store-utilis";


interface CartState {
    cart: {
        quantity: number, product: Product
    }[],
    setCart: (data:  {
        quantity: number, product: Product
    }[]) => Promise<void>
}

const useCartStore = createStore<CartState>((set) => ({
    cart: [],
    setCart: async (data:  {
        quantity: number, product: Product
    }[]) => {
        set({cart: data})
    }
}), {
    devtoolsEnabled: true,
    persistOptions: {
        name: 'cart-list',
        storage: localPersistStorage,
    },
})
export default useCartStore;