import React from "react"

import Image from "next/image"
import PersonalInfo from "./PersonalInfo"
import Repositories from "./Repositories"
import Followers from "./Followers"
import Follows from "./Follows"

type ProfileProps = {
  user: GitHubUser
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="w-full current-screen-height py-6 grid grid-cols-4 grid-rows-12 gap-6 [&>*]:bg-secondary [&>*]:p-3 [&>*]:rounded-md">
      <section className="!p-0 col-span-1 row-span-6 center overflow-hidden">
        <Image
          className="w-auto h-full object-cover"
          width={300}
          height={300}
          src={user.avatar_url}
          alt="profile"
        />
      </section>
      <section className="col-span-3 row-span-4 flex flex-col justify-between">
        <PersonalInfo {...user} />
      </section>
      <section className="col-span-3 row-span-8">
        <Repositories />
      </section>
      <section className="row-span-3">
        <Followers />
      </section>
      <section className="row-span-3">
        <Follows />
      </section>
    </div>
  )
}

export default Profile
