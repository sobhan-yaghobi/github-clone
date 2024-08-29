import React from "react"

import Header from "@/components/modules/Header"

const layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <section className="container">{children}</section>
    </>
  )
}

export default layout
