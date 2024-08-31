import "server-only"

import { cookies } from "next/headers"
import { BASE_URL } from "../utils/variable"
import axios from "axios"

const api = axios.create({
  baseURL: BASE_URL,
})

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

export const getAccessToken = async (code: string | undefined | null) => {
  try {
    if (!code) throw new Error("Authorization code is missing")
    if (!BASE_URL) throw new Error("Base URL is not configured")

    const { data } = await api.get("/api/auth/accessToken", {
      params: { code },
    })

    return data
  } catch (error) {
    console.error("Get token failed:", error)
    return { message: "Failed to retrieve access token", status: false }
  }
}

export const getUser = async (token: string) => {
  try {
    const { data } = await api.get("/api/auth/verifyToken", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data as GitHubUser
  } catch (error) {
    console.error("Failed to get user:", error)
    return { message: "Failed to get user", status: false }
  }
}

export const verifySession = async (session: session) => {
  try {
    const { token, userId } = session
    if (!token || !userId || !BASE_URL)
      throw new Error("Failed to verify user, something is missing")

    const userData = await getUser(token)

    const isUserIdMismatch = "id" in userData && userData.id.toString() !== userId.toString()
    if (isUserIdMismatch) throw new Error("User is not valid, id is mismatch")

    return { message: "Verify session successfully", status: true }
  } catch (error) {
    console.error("Token verification failed:", error)
    return { message: "Failed to verify session", status: false }
  }
}
