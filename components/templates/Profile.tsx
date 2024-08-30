import Image from "next/image"
import React from "react"

type ProfileProps = {
  user: GitHubUser
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="w-full pt-6 grid grid-cols-4 gap-6 [&>*]:bg-secondary [&>*]:p-6 [&>*]:rounded-md">
      <section className="!p-0 col-span-1 center overflow-hidden">
        <Image
          className="w-full h-auto object-cover"
          width={300}
          height={300}
          src={user.avatar_url}
          alt="profile"
        />
      </section>
      <section className="min-h-32 col-span-3 [&>*]:mb-3">
        <h3 className="text-2xl">{user.name}</h3>
        <p className="font-mono">{user.bio}</p>
      </section>
    </div>
  )
}

export default Profile
