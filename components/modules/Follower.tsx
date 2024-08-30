import React from "react"

import { ArrowUpRight } from "lucide-react"

import Link from "next/link"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"

type FollowerProps = {
  follower: GitHubFollower
  index: number
}

const Follower: React.FC<FollowerProps> = ({ follower, index }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Avatar
          style={{ zIndex: index + 1 }}
          className="size-12 relative border border-solid border-primary hover:cursor-pointer hover:border-2 hover:!z-40"
        >
          <AvatarImage src={follower.avatar_url} />
          <AvatarFallback>{follower.login}</AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className="w-64">
        <div className="flex justify-between">
          <Avatar>
            <AvatarImage src={follower.avatar_url} />
            <AvatarFallback>{follower.login}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="text-sm font-semibold truncate">{follower.login}</h4>
            <Link target="_blank" href={follower.html_url}>
              <Button className="text-sm" size="sm" variant="link">
                <span>github account</span>
                <ArrowUpRight className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default Follower
