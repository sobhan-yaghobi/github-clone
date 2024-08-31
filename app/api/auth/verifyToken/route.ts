import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

import { GET_USER_URL } from "@/lib/utils/variable"

export const dynamic = "force-dynamic"

export const GET = async (request: NextRequest) => {
  try {
    const authorizationValue = request.headers.get("Authorization")

    if (!authorizationValue) throw new Error("failed to get Authorization value")

    const { data } = await axios.get(GET_USER_URL, {
      headers: { Authorization: authorizationValue },
    })

    return NextResponse.json(data)
  } catch (error) {
    const message = typeof error === "string" ? error : "failed to get access token"
    return NextResponse.json({
      message,
      status: false,
    })
  }
}
