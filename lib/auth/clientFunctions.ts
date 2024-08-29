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
  } catch (_) {
    return false
  }
}

export const verifyToken = async (token: string | undefined | null) => {
  try {
    if (!token || !BASE_URL) throw new Error("code or url is missing")

    const { data } = await axios.get(`${BASE_URL}/api/auth/verifyToken`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return data
  } catch (_) {
    return false
  }
}
