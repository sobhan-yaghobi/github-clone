import React from "react"

import Image from "next/image"
import PersonalInfo from "./PersonalInfo"
import Repositories from "./Repositories"
import Followers from "./Followers"
import Following from "./Following"

type ProfileProps = {
  user: GitHubUser
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="w-full current-screen-height py-6 flex gap-6 max-lg:h-auto">
      <section className="h-60 flex overflow-hidden max-lg:h-auto max-lg:center max-lg:flex-col">
        <section className="w-60 center lg:mr-6 max-lg:mb-6">
          <Image
            className="w-auto h-full object-cover rounded-md"
            width={300}
            height={300}
            src={user.avatar_url}
            alt="profile"
          />
        </section>
        <section className="flex-1 flex flex-col justify-between max-lg:text-center">
          <PersonalInfo {...user} />
        </section>
      </section>
      {/* <section className="flex-1 flex flex-col center">
          <Followers url={user.followers_url} />
        </section>

        <section className="flex-1 flex flex-col center">
          <Following url={user.following_url} />
        </section>

      <section>
        <section className="col-span-3 row-span-4 flex flex-col justify-between">
          <PersonalInfo {...user} />
        </section>

        <section className="col-span-3 row-span-8 flex flex-col">
          <Repositories />
        </section>
      </section> */}
    </div>
  )
}

export default Profile
