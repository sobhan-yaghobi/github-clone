import React from "react"

import GithubWhiteIcon from "@/public/github-mark-white.svg"
import GithubIcon from "@/public/github-mark.svg"

import ChangeThemeToggle from "./ChangeThemeToggle"
import Image from "next/image"
import LogoutButton from "./LogoutButton"

const Header: React.FC = () => {
  return (
    <header className="h-20 border-b-[.5px]">
      <div className="container h-full flex justify-between items-center">
        <div className="flex items-center">
          <div className="size-12 center relative">
            <Image
              width={40}
              height={40}
              src={GithubIcon}
              className="size-12 absolute dark:opacity-0"
              alt="github-icon"
            />
            <Image
              width={40}
              height={40}
              src={GithubWhiteIcon}
              className="size-12 absolute opacity-0 dark:opacity-100"
              alt="github-icon"
            />
          </div>
          <h3 className="text-xl font-extrabold ml-3">GitRetrieve</h3>
        </div>
        <ul className="flex items-center [&>*]:ml-3">
          <li>
            <LogoutButton />
          </li>
          <li>
            <ChangeThemeToggle />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
