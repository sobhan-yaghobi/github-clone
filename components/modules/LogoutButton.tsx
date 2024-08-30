"use client"

import React from "react"

import { logoutFormAction } from "@/app/actions/logout"

import { Button } from "../ui/button"
import { LogOut } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"

const LogoutButton = () => {
  const logout = () => logoutFormAction()
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive" size="icon">
            <LogOut />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
            <Button onClick={logout} type="button" variant="destructive">
              Yes, I am sure
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default LogoutButton
