import React from "react"
import axios from "axios"
import { getSession, session } from "@/lib/auth/serverFunction"
import { GET_REPOSITORY_LIST } from "@/lib/utils"

import ErrorComponent from "../modules/ErrorComponent"
import Repository from "../modules/Repository"

const Repositories: React.FC = async () => {
  try {
    const session = getSession() as session
    const { data } = await axios.get<RepositoryArray>(GET_REPOSITORY_LIST, {
      headers: {
        Authorization: `Bearer ${session.token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
    return (
      <>
        <h3 className="text-3xl font-oswald capitalize mb-3">Repositories</h3>
        <ul className="flex-1 overflow-y-auto">
          {data.map((repository) => (
            <li key={repository.id}>
              <Repository repository={{ ...repository }} />
            </li>
          ))}
        </ul>
      </>
    )
  } catch (error) {
    console.log("Repositories Component Error :", error)
    return (
      <div className="h-full center">
        <ErrorComponent message="Failed to get repositories" />
      </div>
    )
  }
}

export default Repositories
