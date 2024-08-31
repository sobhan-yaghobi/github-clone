import React from "react"

import { SearchParamsComponentProps } from "@/types/utils"

import LoginForm from "@/components/templates/LoginForm"

const page: React.FC<SearchParamsComponentProps> = ({ searchParams }) => {
  const code = typeof searchParams?.code === "string" ? searchParams?.code : null
  return (
    <div className="w-svw h-screen center relative overflow-hidden">
      <LoginForm code={code} />
      <div className="ellipse w-[150vw] max-lg:w-[240vw]">
        <div className="rec1" />
        <div className="rec2" />
        <div className="rec3" />
      </div>
    </div>
  )
}

export default page
