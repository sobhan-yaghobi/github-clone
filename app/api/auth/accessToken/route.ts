import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

import { ACCESS_TOKEN_URL, CLIENT_ID, CLIENT_SECRET } from "@/lib/utils/variable"

export const dynamic = "force-dynamic"

export const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = request.nextUrl
    const code = searchParams.get("code")

    if (!CLIENT_ID || !CLIENT_SECRET || !code)
      throw new Error("Get access token failed, some value are missing")

    const { data } = await axios.post(ACCESS_TOKEN_URL, undefined, {
      headers: { Accept: "application/json" },
      params: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
      },
    })

    if (!("access_token" in data)) throw new Error(data.error_description)

    return NextResponse.json(data)
  } catch (error) {
    const message = typeof error === "string" ? error : "Failed to get access token"
    return NextResponse.json({
      message,
      status: false,
    })
  }
}
