import React from "react"

import GithubIcon from "@/public/github-mark-white.svg"

import { Button } from "../ui/button"
import Image from "next/image"

const LoginForm: React.FC = () => {
  return (
    <div className="bg-white/50 dark:bg-black/50 max-w-96 p-6 backdrop-blur-lg shadow-xl shadow-black/10 rounded-lg absolute">
      <section className="text-center [&>*]:mt-3 [&]:first:*:!mt-0">
        <h1 className="text-xl">Welcome to GitRetrieve</h1>

        <p className="text-xs opacity-60 mt-3">
          Easily explore and download your GitHub repositories. Log in to start managing your code
          effortlessly
        </p>

        <Button variant="secondary">
          <Image className="mr-3" width={17} height={17} src={GithubIcon} alt="github-icon" />
          <span>Log in with GitHub</span>
        </Button>
      </section>
    </div>
  )
}

export default LoginForm
