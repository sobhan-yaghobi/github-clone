"use server"

import { deleteSession } from "@/lib/server/auth"
import { redirect } from "next/navigation"

export const logoutFormAction = () => {
  deleteSession()
  redirect("/login")
}
