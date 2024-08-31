"use client"

import React, { useCallback, useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useToast } from "../ui/use-toast"

import { loginFormAction } from "@/server-actions/auth/login"

import GithubLoginButton from "../modules/GithubLoginButton"

const LoginForm: React.FC<LoginFormProps> = ({ code }) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const loginSuccessfully = useCallback(
    (message: string) => {
      toast({ title: message, variant: "success" })
      router.push("/")
    },
    [toast, router]
  )

  const loginFailed = useCallback(
    (message: string) => {
      setIsLoading(false)

      const params = new URLSearchParams(searchParams)
      params.delete("code")
      router.replace(`${pathname}?${params.toString()}`)

      toast({ title: message, variant: "destructive" })
    },
    [toast, searchParams, pathname, router]
  )

  const login = useCallback(
    async (code: string) => {
      setIsLoading(true)
      try {
        const loginResult = await loginFormAction(code)
        if (loginResult?.status) {
          loginSuccessfully(loginResult.message)
        } else {
          loginFailed(loginResult.message)
        }
      } catch (error) {
        console.error("Login failed :", error)
        loginFailed("An unexpected error occurred")
      }
    },
    [loginSuccessfully, loginFailed]
  )

  useEffect(() => {
    if (code) {
      login(code)
    } else {
      setIsLoading(false)
    }
  }, [code, login])
  return (
    <div className="z-50 bg-white/50 dark:bg-black/50 w-96 p-6 backdrop-blur-lg shadow-xl shadow-black/10 rounded-lg absolute">
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
