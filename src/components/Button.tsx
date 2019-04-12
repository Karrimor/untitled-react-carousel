import React, { ReactNode } from 'react'

interface IProps {
  onClick: () => void
  ariaLabel: string
  icon: string
}

export default function Button(props: IProps) {
  return (
    <button
      className="button"
      onClick={props.onClick}
      aria-label={props.ariaLabel}
    >
      {props.icon}
    </button>
  )
}
