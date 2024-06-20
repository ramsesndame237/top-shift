import {CartData, Categories} from "@/types/app.types";
import ApiService from "@/services/ApiService";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {useTranslation} from "react-i18next";
import {CartUlrs} from "@/services/urls";


export let useCart = (id:number) => {

    const queryClient = useQueryClient();
    const {t} = useTranslation('common');

    return useQuery<CartData, Error>(
        {
            queryKey: ['cartuserList'], queryFn: async () => {
                let data;
                try {
                    const response = await ApiService.getRequest(CartUlrs.CART_GET_USER_PRODUCT(id), false)
                    data = await response.json()
                    if ([200, 201].includes(response.status)) {
                        return data
                    }
                } catch (e) {
                    throw new Error(t('translate_key_server_error_message'))

                }
                throw new Error(data?.message || data?.detail || t(''));
            }
        },
    )
}

