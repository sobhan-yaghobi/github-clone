import React from "react"
import { getUser } from "@/lib/auth/serverFunction"
import { getSession, session } from "@/lib/auth/serverFunction"

import errorIcon from "@/public/error-icon.svg"

import Image from "next/image"
import Profile from "@/components/templates/Profile"

export const revalidate = 3600

const page: React.FC = async () => {
  const session = getSession() as session

  const userData = await getUser(session.token)

  if (!userData || !("id" in userData)) {
    return (
      <div className="w-full current-screen-height center flex-col">
        <Image width={250} height={250} src={errorIcon} alt="failure-icon" />
        <h1 className="text-2xl font-thin mt-6">Failed to load your data</h1>
      </div>
    )
  }

  return <Profile user={userData} />
}

export default page
