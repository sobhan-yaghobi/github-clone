"use client"

import React, { useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useToast } from "../ui/use-toast"

import { loginFormAction } from "@/app/actions/login"

import GithubLoginButton from "../modules/GithubLoginButton"

type LoginFormProps = {
  code: string | undefined
}

const LoginForm: React.FC<LoginFormProps> = ({ code }) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const login = async (code: string) => {
    setIsLoading(true)
    const loginResult = await loginFormAction(code)
    if (loginResult && loginResult.status) {
      return loginSuccessfully(loginResult.message)
    } else {
      return loginFailed(loginResult.message)
    }
  }

  const loginSuccessfully = (message: string) => {
    toast({ title: message, variant: "success" })
    return router.push("/")
  }

  const loginFailed = (message: string) => {
    setIsLoading(false)

    const params = new URLSearchParams(searchParams)
    params.delete("code")
    router.replace(`${pathname}?${params.toString()}`)

    return toast({ title: message, variant: "destructive" })
  }

  useEffect(() => {
    code ? login(code) : setIsLoading(false)
  }, [code])

  return (
    <div className="bg-white/50 dark:bg-black/50 max-w-96 p-6 backdrop-blur-lg shadow-xl shadow-black/10 rounded-lg absolute">
      <section className="text-center [&>*]:mt-3 [&]:first:*:!mt-0">
        <h1 className="text-xl">Welcome to GitRetrieve</h1>

        <p className="text-xs opacity-60 mt-3">
          Easily explore and download your GitHub repositories. Log in to start managing your code
          effortlessly
        </p>

        <GithubLoginButton isLoading={isLoading} setIsLoading={setIsLoading} />
      </section>
    </div>
  )
}

export default LoginForm
