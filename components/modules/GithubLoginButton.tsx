"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "../ui/use-toast"

import { AUTHORIZE_URL, CLIENT_ID } from "@/lib/utils"

import GithubIcon from "@/public/github-mark-white.svg"

import { Button } from "../ui/button"
import Image from "next/image"

const GithubLoginButton = () => {
  const { toast } = useToast()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const authorizeInGithub = () => {
    if (!CLIENT_ID || !AUTHORIZE_URL)
      return toast({ title: "client id not found", variant: "destructive" })

    setIsLoading(true)
    router.push(`${AUTHORIZE_URL}?client_id=${CLIENT_ID}`)
  }

  return (
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
          <Image width={16} height={16} src={GithubIcon} priority alt="github-icon" />
        )}
      </div>
      <span>Log in with GitHub</span>
    </Button>
  )
}

export default GithubLoginButton
