import React from "react"
import { timeAgo } from "@/lib/utils"

import { ArrowUpRight, CalendarClock, CalendarPlus2, Mail, MapPin } from "lucide-react"

import Link from "next/link"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

const PersonalInfo: React.FC<PersonalInfoProps> = ({ ...user }) => {
  return (
    <>
      <div className="[&>*]:mb-3">
        <h3 className="text-3xl font-oswald capitalize">{user.name}</h3>
        <ul className="flex items-center [&>*]:mr-3">
          <li>
            <Badge variant="outline">
              <MapPin className="icon-sm mr-1" />
              {user.location}
            </Badge>
          </li>
          <li>
            <Badge variant="outline">
              <CalendarPlus2 className="icon-sm mr-1" />
              {timeAgo(user.created_at)}
            </Badge>
          </li>
          <li>
            <Badge variant="outline">
              <CalendarClock className="icon-sm mr-1" />
              {timeAgo(user.updated_at)}
            </Badge>
          </li>
        </ul>
        <p className="font-thin text-base">{user.bio}</p>
      </div>
      <ul className="flex items-center [&>*]:mr-3">
        <li>
          <Link target="_blank" href={`mailto:${user.email}`}>
            <Button variant="ghost" size="sm">
              <Mail className="mr-1" />
              {user.email}
            </Button>
          </Link>
        </li>
        <li>
          <Link target="_blank" href={user.html_url}>
            <Button size="sm">
              <span>github account</span>
              <ArrowUpRight className="ml-1" />
            </Button>
          </Link>
        </li>
      </ul>
    </>
  )
}

export default PersonalInfo
