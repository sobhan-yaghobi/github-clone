import { NextRequest, NextResponse } from "next/server"
import { verifyToken } from "./lib/auth/clientFunctions"

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get("token")?.value

  if (token) {
    const verifyTokenResult = await verifyToken(token)
    if (!verifyTokenResult) return redirectToLoginAndDeleteToken(request)

    if (pathname.startsWith("/login")) return redirectToHomePage(request)

    return NextResponse.next()
  } else {
    if (!pathname.startsWith("/login")) return redirectToLogin(request)
    return null
  }
}

const redirectToLogin = (request: NextRequest) =>
  NextResponse.redirect(new URL("/login", request.url))

const redirectToLoginAndDeleteToken = (request: NextRequest) => {
  const response = redirectToLogin(request)
  response.cookies.delete("token")
  return response
}

const redirectToHomePage = (request: NextRequest) =>
  NextResponse.redirect(new URL("/", request.url))

export const config = {
  matcher: ["/", "/login"],
}
