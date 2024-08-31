import React from "react"

import Image from "next/image"
import PersonalInfo from "./PersonalInfo"
import Repositories from "./Repositories"
import Followers from "./Followers"
import Following from "./Following"

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="w-full current-screen-height py-6 flex flex-col max-lg:h-auto">
      <section className="h-72 flex overflow-hidden max-lg:h-auto max-lg:mb-12 max-lg:center max-lg:flex-col">
        <section className="w-72 center lg:mr-6 max-lg:mb-6">
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

      <section className="flex-1 flex lg:overflow-hidden max-lg:flex-col">
        <section className="w-72 flex flex-col max-lg:w-auto lg:mr-6 max-lg:mb-12">
          <section className="bg-muted w-full h-32 p-3 mb-6 rounded-sm flex flex-col items-center justify-between">
            <Followers url={user.followers_url} />
          </section>

          <section className="bg-muted w-full h-32 p-3 rounded-sm flex flex-col items-center justify-between">
            <Following url={user.following_url} />
          </section>
        </section>

        <section className="flex-1 flex flex-col lg:overflow-y-auto">
          <Repositories />
        </section>
      </section>
    </div>
  )
}

export default Profile
