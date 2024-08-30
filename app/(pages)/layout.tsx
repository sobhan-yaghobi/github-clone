import React from "react"

import Header from "@/components/modules/Header"

export const revalidate = 3600

const layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <section className="container">{children}</section>
    </>
  )
}

export default layout
