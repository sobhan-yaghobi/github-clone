import React from "react"
import axios from "axios"
import { getSession } from "@/lib/server/auth"

import ErrorComponent from "../modules/ErrorComponent"
import Follower from "../modules/Follower"

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
        <h3 className="w-full text-3xl font-oswald capitalize max-lg:w-auto">
          Followers {isFollowerCountMoreThanFive}
        </h3>
        <ul className="flex flex-row-reverse items-center pl-3 [&>*]:first:ml-0 [&>*]:-ml-3">
          {isFollowerCountMoreThanFive && (
            <li className="bg-primary size-12 center relative z-10 rounded-full border border-solid border-primary">
              +{followerCount - 6}
            </li>
          )}

          {data.slice(0, countOfShowingFollowers).map((follower, index) => (
            <Follower key={follower.id} follower={{ ...follower }} index={index} />
          ))}
        </ul>
      </>
    )
  } catch (error) {
    console.log("Followers component failed :", error)
    return <ErrorComponent message="Failed to get followers" />
  }
}

export default Followers
