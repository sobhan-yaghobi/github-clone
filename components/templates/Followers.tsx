import React from "react"
import axios from "axios"
import { getSession, session } from "@/lib/auth/serverFunction"

import ErrorComponent from "../modules/ErrorComponent"
import Follower from "../modules/Follower"

type FollowersProps = {
  url: string
}

const Followers: React.FC<FollowersProps> = async ({ url }) => {
  try {
    const session = getSession() as session
    const { data } = await axios.get<GitHubFollowerArray>(url, {
      headers: {
        Authorization: `Bearer ${session.token}`,
      },
    })
    const followerCount = data.length
    const isFollowerCountMoreThanFive = followerCount > 5
    const countOfShowingFollowers = isFollowerCountMoreThanFive ? 5 : followerCount

    return (
      <>
        <h3 className="w-full text-3xl font-oswald capitalize">
          Followers {isFollowerCountMoreThanFive}
        </h3>
        <ul className="flex-1 flex flex-row-reverse items-center [&>*]:first:ml-0 [&>*]:-ml-3">
          {isFollowerCountMoreThanFive && (
            <li className="bg-primary size-12 center relative z-10 rounded-full border border-solid border-primary">
              +{followerCount}
            </li>
          )}

          {data.slice(0, countOfShowingFollowers).map((follower, index) => (
            <Follower key={follower.id} follower={{ ...follower }} index={index} />
          ))}
        </ul>
      </>
    )
  } catch (error) {
    return <ErrorComponent message="Failed to get followers" />
  }
}

export default Followers
