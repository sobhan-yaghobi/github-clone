import Image from "next/image"
import React from "react"

type ProfileProps = {
  user: GitHubUser
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div>
      <Image width={300} height={300} src={user.avatar_url} alt="profile" />
      {user.name}{" "}
    </div>
  )
}

export default Profile
