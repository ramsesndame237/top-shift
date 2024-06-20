import {create} from "zustand";
import {Categories, Product} from "@/types/app.types";
import {createStore, localPersistStorage} from "@/store/store-utilis";


interface CategorieState {
    categorie: Categories[],
    setCategorie: (data: Categories[]) => Promise<void>
}

const useCategorieStore = createStore<CategorieState>((set) => ({
    categorie: [],
    setCategorie: async (data: Categories[]) => {
        set({categorie: data})
    }
}), {
    devtoolsEnabled: true,
    persistOptions: {
        name: 'categorie-list',
        storage: localPersistStorage,
    },
})
export default useCategorieStore;