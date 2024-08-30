import React from "react"

import { OctagonX } from "lucide-react"

type ErrorComponentProps = {
  message: string
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => {
  return (
    <div className="font-thin text-sm center flex-col">
      <OctagonX className="stroke-destructive mb-2" />
      {message}
    </div>
  )
}

export default ErrorComponent
