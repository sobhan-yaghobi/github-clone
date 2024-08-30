import "server-only"

import { cookies } from "next/headers"

export type session = { userId: string; token: string }

export const setSession = (session: session) => {
  const threeDay = 24 * 60 * 60 * 1000
  cookies().set("session", JSON.stringify(session), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: threeDay,
    sameSite: "lax",
    path: "/",
  })
}

export const getSession = (): session | undefined => {
  try {
    const sessionString = cookies().get("session")?.value

    if (sessionString) {
      const sessionData = JSON.parse(sessionString) as session

      if (sessionData && sessionData.token && sessionData.userId) {
        return sessionData
      }
    }
  } catch (error) {
    console.error("Failed to parse session:", error)
    deleteSession()
  }
}

export const deleteSession = () => cookies().delete("session")
