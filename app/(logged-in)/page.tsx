import React from "react"
import { getSession, getUser } from "@/lib/server/auth"

import errorIcon from "@/public/error-icon.svg"

import Image from "next/image"
import Profile from "@/components/templates/Profile"

export const dynamic = "force-dynamic"

const page: React.FC = async () => {
  try {
    const session = getSession() as session

    const userData = await getUser(session.token)

    if (!userData || !("id" in userData)) throw new Error("Get user data failed")

    return <Profile user={userData} />
  } catch (error) {
    console.log("Home page failed :", error)
    return (
      <div className="w-full current-screen-height center flex-col">
        <Image className="size-60" width={240} height={240} src={errorIcon} alt="failure-icon" />
        <h1 className="text-2xl font-thin mt-6">Failed to load your data</h1>
      </div>
    )
  }
}

export default page
