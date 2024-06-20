'use client'

import {Metadata} from "next"
import Image from "next/image"
import Link from "next/link"

import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Input} from "@/components/ui/input";
import {login, register} from "@/app/[locale]/(authentification)/hooks/authentifcation";
import SecureLS from "secure-ls";
import {useRouter} from "next/navigation";
const ls = new SecureLS({ encodingType: 'aes' });
export const metadata: Metadata = {
    title: "Authentication",
    description: "Authentication forms built using the components.",
}

export const SigninViewer = () => {
    const {t} = useTranslation();
    const [register, setRegister] = useState(false)
    return (
        <>
            <div className="md:hidden">
                <Image
                    src="/static/images/bg_images_md.png"
                    width={1280}
                    height={843}
                    alt="Authentication"
                    className="block dark:hidden"
                />
                <Image
                    src="/static/images/bg_images_md.png"
                    width={1280}
                    height={843}
                    alt="Authentication"
                    className="hidden dark:block"
                />
            </div>
            <div
                className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-3 w-screen lg:px-0">
                <div
                    onClick={() => setRegister(true)}
                    className={cn(
                        "absolute right-4 top-4 md:right-8 md:top-8"
                    )}
                >
                    {t('translate_key_account_create')}
                </div>
                <div
                    className="relative hidden h-full col-span-2 flex-col bg-[url('/static/images/shop_review.jpg')] bg-no-repeat bg-cover bg-center p-10 text-white lg:flex dark:border-r">
                    <div className="absolute inset-0 bg-black opacity-5"/>
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <div className={'size-14 md:size-20 flex items-center justify-center'}>
                            <img className={'size-full object-contain object-center'} src="/static/images/logo.png"
                                 alt="logo the top sheft"/>
                        </div>
                        Tops Shop
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;{t('translate_key_program_description')}&rdquo;
                            </p>
                            <footer className="text-sm">Sofia Davis</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                {t('translate_key_connect')}
                            </h1>
                        </div>
                        <UserAuthForm onClose={()=>setRegister(false)} register={register}/>
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <Link
                                href="/terms"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="/#"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
    register: boolean,
    onClose:()=>void
}

export function UserAuthForm({className, ...props}: UserAuthFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
const navigate = useRouter()
    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        if (props.register) {
            return await register({email, username, password}).then((response) => {
                console.log("thsi response of the connection ", response)
                setIsLoading(false)
                props.onClose()

            }).catch((error) => {
                console.error("this is", error)
                setIsLoading(false)
            })
        }
        await login({username, password, expiresInMins: 160}).then((response) => {
            console.log("this ",response.token)
            ls.set('token',response.token)
            ls.set('user',{email:response.email,username:response.username,id:response.id})
            navigate.push('/')
        }).catch((error) => {
            console.error(error)
        }).finally(() => setIsLoading(false))
        setIsLoading(false)
    }

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');


    const {t} = useTranslation();
    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={onSubmit}>
                <div className="grid gap-8">
                    <div className="grid gap-1">

                        <Input value={username} onChange={(e) => setUsername(e.currentTarget.value)} type="text"
                               placeholder={t('translate_key_username')} className={'mb-8'}/>

                        {props.register ?
                            <Input value={email} onChange={(e) => setEmail(e.currentTarget.value)} type="email"
                                   placeholder={t('translate_key_username')} className={'mb-8'}/> : null}
                        <Input value={password} onChange={(e) => setPassword(e.currentTarget.value)} type="password"
                               placeholder={t('translate_key_password')}/>

                    </div>
                    <Button disabled={isLoading} className={'text-white'}>
                        {props.register ? t('translate_key_account_create') : t('translate_key_connect')}
                    </Button>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t"/>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
                </div>
            </div>
        </div>
    )
}