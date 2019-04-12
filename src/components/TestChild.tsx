import React from 'react'

interface IProps {
  color: string
  width?: string
}

export default function TestChild(props: IProps) {
  return (
    <div
      className="image"
      style={{ backgroundColor: props.color, width: props.width }}
    />
  )
}
