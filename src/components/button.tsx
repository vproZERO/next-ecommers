

import clsx from 'clsx'
import React from 'react'

interface Props {
    children: React.ReactNode
    className?: string
    type?: string
    onClick?: () => void
    icon?: React.ReactNode
    variant?: string
}

export const Button = ({children, className, type , onClick , icon , variant}: Props) => {
  return (
    <button onClick={onClick} className={clsx("" , className, {
        "bg-primary text-[#FFFFFF]" : variant === "primary",
        "bg-[#F6F8FA] text-[#000000]" : variant === "secondary",
        "bg-inherit" : variant === "outline"
    })}>
        {children}
    </button>
  )
}
