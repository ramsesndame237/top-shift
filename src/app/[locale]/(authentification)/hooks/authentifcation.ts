import AppService from "@/services/ApiService";
import {AuthUrls} from "@/services/urls";

export const login  = async (data: any) => {
    const response = await AppService.postRequest(AuthUrls.AUTH_URL_LOGIN, data, false)

    if(!response.ok){
        throw new Error('Un problème est survenu veillez réessayer utérieurement');
    }
    return response.json()
}
export const register = async (data: any) => {
    const response = await AppService.postRequest(AuthUrls.AUTH_URL_REGISTER, data, false)
    return response.json()
}