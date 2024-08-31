import axios from "axios"
import { NextRequest, NextResponse } from "next/server"

import { GET_USER_URL } from "@/lib/utils/variable"

export const dynamic = "force-dynamic"

export const GET = async (request: NextRequest) => {
  try {
    const authorizationValue = request.headers.get("Authorization")

    if (!authorizationValue)
      throw new Error("Get authorization value failed, authorization value is missing")

    const { data } = await axios.get(GET_USER_URL, {
      headers: { Authorization: authorizationValue },
    })

    return NextResponse.json(data)
  } catch (error) {
    console.log("verifyToken get api failed :", error)

    return NextResponse.json({
      message: "Verify token failed",
      status: false,
    })
  }
}
