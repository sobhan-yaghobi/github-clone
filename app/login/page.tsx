import React from "react"

import LoginForm from "@/components/templates/LoginForm"

const page: React.FC<SearchParamsComponentProps> = ({ searchParams }) => {
  const code = typeof searchParams?.code === "string" ? searchParams?.code : null
  return (
    <div className="w-svw h-screen center relative overflow-hidden">
      <LoginForm code={code} />

      <div className="ellipse-background h-screen w-[150vw] rounded-[100%] top-1/2 center absolute max-lg:w-[240vw]">
        <div className="absolute -z-10 top-0 size-[550px] bg-[#7d12ff] blur-[100px] rotate-45" />
        <div className="absolute -z-10 size-[725px] bg-[#764ba6] blur-[200px] rotate-45" />
        <div className="absolute -z-10 size-[600px] bg-[#7480ff] blur-[300px] rotate-45" />
      </div>
    </div>
  )
}

export default page
