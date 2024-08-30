import React from "react"

import { SearchParamsComponentProps } from "@/types/utils"

import LoginForm from "@/components/templates/LoginForm"

const page: React.FC<SearchParamsComponentProps> = ({ searchParams }) => {
  const code = typeof searchParams?.code === "string" ? searchParams?.code : undefined
  return (
    <div className="w-svw h-screen center">
      <LoginForm code={code} />
    </div>
  )
}

export default page
