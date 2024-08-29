import "server-only"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const setToken = async (token: string) => {
  const threeDay = 24 * 60 * 60 * 1000 * 3
  cookies().set("token", token, {
    httpOnly: true,
    secure: true,
    expires: threeDay,
    sameSite: "lax",
    path: "/",
  })
}

export const getToken = () => cookies().get("token")

export const deleteToken = () => {
  cookies().delete("token")
  redirect("/login")
}
