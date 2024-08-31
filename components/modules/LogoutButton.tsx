"use client"

import React from "react"

import { logoutFormAction } from "@/server-actions/auth/logout"

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
        <DialogContent className="w-11/12">
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
            <Button
              onClick={logout}
              type="button"
              variant="destructive"
              className="lg:mr-3 max-lg:mb-3"
            >
              Yes, I am sure
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default LogoutButton
