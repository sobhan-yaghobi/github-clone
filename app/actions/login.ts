"use server"

import { getAccessToken, getUser } from "@/lib/auth/serverFunction"
import { setSession } from "@/lib/auth/serverFunction"

export const loginFormAction = async (code: string) => {
  try {
    const accessTokenResult = await getAccessToken(code)
    if (accessTokenResult && "access_token" in accessTokenResult) {
      const userResult = await getUser(accessTokenResult.access_token)

      if ("id" in userResult) {
        setSession({ userId: userResult.id.toString(), token: accessTokenResult.access_token })
        return { message: "Login successfully", status: true }
      } else {
        throw new Error("User not found")
      }
    } else {
      throw new Error("Access token not found")
    }
  } catch (error) {
    const message = typeof error === "string" ? error : "Login failed"
    return { message, status: false }
  }
}
