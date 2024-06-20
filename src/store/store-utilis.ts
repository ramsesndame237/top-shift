import { create, StateCreator, StoreApi, UseBoundStore } from 'zustand';
import { devtools, persist, PersistOptions } from 'zustand/middleware';

interface ICreateStoreOptions<T, U> {
    persistOptions?: PersistOptions<T, U>;
    devtoolsEnabled?: boolean;
}

export function createStore<T extends object>(
    createState: StateCreator<T>,
    options?: ICreateStoreOptions<T, any>
): UseBoundStore<StoreApi<T>> {
    let store = create(createState);

    if (options?.persistOptions) {
        store = create(persist(createState, options.persistOptions));
    }

    if (options?.devtoolsEnabled) {
        store = create(devtools(createState));
    }

    if (options?.devtoolsEnabled && options?.persistOptions) {
        store = create(devtools(persist(createState, options.persistOptions)));
    }

    return store;
}


import { PersistStorage } from 'zustand/middleware';

export const localPersistStorage: PersistStorage<T> = {
    getItem: (name) => {
        const str = localStorage.getItem(name);
        if (!str) return null;
        return JSON.parse(str);
    },
    setItem: (name, value) => {
        localStorage.setItem(name, JSON.stringify(value));
    },
    removeItem: (name) => localStorage.removeItem(name),
};