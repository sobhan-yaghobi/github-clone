import React from "react"
import axios from "axios"
import { getSession, session } from "@/lib/auth/serverFunction"

import ErrorComponent from "../modules/ErrorComponent"
import Followed from "../modules/Follower"

type FollowingProps = {
  url: string
}

const Following: React.FC<FollowingProps> = async ({ url }) => {
  try {
    const cleanUrl = url.replace("{/other_user}", "")
    const session = getSession() as session
    const { data } = await axios.get<GitHubFollowerArray>(cleanUrl, {
      headers: {
        Authorization: `Bearer ${session.token}`,
      },
    })
    const followingCount = data.length
    const isFollowingCountMoreThanFive = followingCount > 5
    const countOfShowingFollowing = isFollowingCountMoreThanFive ? 5 : followingCount

    return (
      <>
        <h3 className="w-full text-3xl font-oswald capitalize max-lg:w-auto">
          Following {isFollowingCountMoreThanFive}
        </h3>
        <ul className="flex flex-row-reverse items-center pl-3 [&>*]:first:ml-0 [&>*]:-ml-3">
          {isFollowingCountMoreThanFive && (
            <li className="bg-primary size-12 center relative z-10 rounded-full border border-solid border-primary">
              +{followingCount - 6}
            </li>
          )}

          {data.slice(0, countOfShowingFollowing).map((follower, index) => (
            <Followed key={follower.id} follower={{ ...follower }} index={index} />
          ))}
        </ul>
      </>
    )
  } catch (error) {
    return <ErrorComponent message={`Failed to get following ${url}`} />
  }
}

export default Following
