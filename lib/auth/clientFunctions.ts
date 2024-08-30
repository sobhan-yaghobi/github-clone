import axios from "axios"
import { BASE_URL } from "../utils"

export const getAccessToken = async (code: string | undefined | null) => {
  try {
    if (!code || !BASE_URL) throw new Error("code or url is missing")

    const { data } = await axios.get(`${BASE_URL}/api/auth/accessToken`, {
      params: {
        code,
      },
    })

    return data
  } catch (error) {
    console.error("Get token failed:", error)
    return false
  }
}

export const getUser = async (token: string) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/auth/verifyToken`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (error) {
    return { message: "failed to get user", status: false }
  }
}

export const verifyToken = async (
  token: string | undefined | null,
  userId: string | undefined | null
) => {
  try {
    if (!token || !userId || !BASE_URL)
      throw new Error("failed to verify user , something is missing")

    const userData = await getUser(token)

    if (userData.id !== userId) throw new Error("user is not equal")

    return userData
  } catch (error) {
    console.error("Token verification failed:", error)
    return false
  }
}
