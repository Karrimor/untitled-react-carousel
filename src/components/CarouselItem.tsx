import React, { ReactNode } from 'react'
import styled from 'styled-components'

const StyledCarouselItem = styled('div')<{ itemWidth: any }>`
  height: 100%;
  width: ${(props: any) => props.itemWidth};
  margin: 0 1rem;
  display: inline-table;
`

interface IProps {
  child: ReactNode
  width: string
}

export default function CarouselItem(props: IProps) {
  return (
    <StyledCarouselItem itemWidth={props.width}>
      {props.child}
    </StyledCarouselItem>
  )
}
