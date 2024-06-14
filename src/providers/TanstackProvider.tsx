'use client'


import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import React from "react";
const TanstackProvider = ({children}:{children:React.ReactNode})=> {

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retryDelay: 10 * 1000
            },
            mutations: {
                retry: false
            }
        }
    });
    return(
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default TanstackProvider;