import React from "react"
import { getRepositoryUrlDownload, timeAgo } from "@/lib/utils"

import { DownloadCloud } from "lucide-react"

import Link from "next/link"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

type RepositoryProps = {
  repository: Repository
}

const Repository: React.FC<RepositoryProps> = ({ repository }) => {
  const downloadUrl = getRepositoryUrlDownload(
    repository.owner.login,
    repository.name,
    repository.default_branch
  )

  return (
    <div className="p-3 mb-3 mr-3 rounded-md border-b-2 border-primary flex items-center justify-between">
      <section className="flex-1">
        <div className="flex mb-3 flex-wrap gap-3">
          <Link target="_blank" className="hover:underline" href={repository.html_url}>
            <h3 className="text-xl font-semibold">{repository.name}</h3>
          </Link>
          <Badge variant="outline">{repository.private ? "private" : "public"}</Badge>
        </div>
        <section className="*:!text-sm">
          <p className="font-thin mb-6">{repository.description}</p>
          <ul className="flex items-center">
            <li className="text-primary font-bold mr-3">{repository.language}</li>
            <li>Updated on {timeAgo(repository.pushed_at)}</li>
          </ul>
        </section>
      </section>
      <section className="w-14 center">
        <Link href={downloadUrl}>
          <Button size="icon" variant="ghost">
            <DownloadCloud />
          </Button>
        </Link>
      </section>
    </div>
  )
}

export default Repository
