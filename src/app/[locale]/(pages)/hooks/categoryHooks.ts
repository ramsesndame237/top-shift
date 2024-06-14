import {Categories} from "@/types/app.types";
import ApiService from "@/services/ApiService";
import {CategoryUrls} from "@/services/urls";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {useTranslation} from "react-i18next";


export const useCategory = () => {

    const queryClient = useQueryClient();
    const {t} = useTranslation('common');

    return useQuery<string[], Error>(
        {
            queryKey: ['categories'], queryFn: async () => {
                let data;
                try {
                    console.log("this is the data")
                    const response = await ApiService.getRequest(CategoryUrls.GET_ALL_PRODUCT_CATEGORIES_LIST, false)
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