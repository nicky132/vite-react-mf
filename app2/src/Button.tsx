import React, { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
}

export default function Button({
  children = "App2 button",
  ...props
}: ButtonProps) {
  return <button {...props}>{children}</button>
}
