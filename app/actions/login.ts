"use server"

import { getAccessToken, getUser, verifyToken } from "@/lib/auth/clientFunctions"
import { setSession } from "@/lib/auth/serverFunction"

export const loginFormAction = async (code: string) => {
  try {
    const accessTokenResult = await getAccessToken(code)
    if ("access_token" in accessTokenResult) {
      const userResult = await getUser(accessTokenResult.access_token)

      if ("id" in userResult) {
        setSession({ userId: userResult.id, token: accessTokenResult.access_token })
        return { message: "login successfully", status: true }
      } else {
        throw new Error("user not found")
      }
    } else {
      throw new Error("access_token not found")
    }
  } catch (error) {
    const message = typeof error === "string" ? error : "login failed"
    return { message, status: false }
  }
}
