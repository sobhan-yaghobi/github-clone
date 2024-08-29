"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "../ui/use-toast"

import GithubIcon from "@/public/github-mark-white.svg"

import { Button } from "../ui/button"
import Image from "next/image"

const LoginForm: React.FC = () => {
  const { toast } = useToast()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const authorizeInGithub = () => {
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID
    const authorizeUrl = process.env.NEXT_PUBLIC_AUTHORIZE_URL

    if (!clientId || !authorizeUrl)
      return toast({ title: "client id not found", variant: "destructive" })

    setIsLoading(true)
    router.push(`${authorizeUrl}?client_id=${clientId}`)
  }

  return (
    <div className="bg-white/50 dark:bg-black/50 max-w-96 p-6 backdrop-blur-lg shadow-xl shadow-black/10 rounded-lg absolute">
      <section className="text-center [&>*]:mt-3 [&]:first:*:!mt-0">
        <h1 className="text-xl">Welcome to GitRetrieve</h1>

        <p className="text-xs opacity-60 mt-3">
          Easily explore and download your GitHub repositories. Log in to start managing your code
          effortlessly
        </p>

        <Button disabled={isLoading} onClick={authorizeInGithub} variant="secondary">
          <div className="size-4 mr-3">
            {isLoading ? (
              <svg
                className="animate-spin text-white size-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            ) : (
              <Image width={16} height={16} src={GithubIcon} alt="github-icon" />
            )}
          </div>
          <span>Log in with GitHub</span>
        </Button>
      </section>
    </div>
  )
}

export default LoginForm
