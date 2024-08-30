"use server"

import { deleteSession } from "@/lib/auth/serverFunction"
import { redirect } from "next/navigation"

export const logoutFormAction = () => {
  deleteSession()
  redirect("/login")
}
