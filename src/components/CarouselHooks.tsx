import React from 'react'
import styled from 'styled-components'
import CarouselItem from './CarouselItem'

const CarouselRoot = styled('div')<{
  height: string
  width: string
}>`
  height: ${(props: any) => props.height};
  width: ${(props: any) => props.width};
`

const CarouselScrollContainer = styled.div`
  overflow-x: hidden;
  height: 100%;
  display: inline-flex;
`
// const CarouselItemContainer = styled('div')<{
//   carouselHeight: string
//   carouselWidth: string
// }>`
//   height: 100%;

//   width: ${(props: any) => props.carouselWidth};
//   // display: inline-table;
// `

interface IProps {
  itemsPerPage: number
  carouselHeight?: string
  carouselWidth?: string
}
export const CarouselHooks: React.StatelessComponent<IProps> = ({
  itemsPerPage,
  carouselHeight,
  carouselWidth,
  children
}) => {
  return (
    <CarouselRoot
      className="carousel-root"
      height={carouselHeight || '30rem'}
      width={carouselWidth || '100%'}
    >
      <CarouselScrollContainer className="carousel-scroll-container">
        {React.Children.map(children, (child, index) => (
          // <CarouselItem key={index} child={child} width={50} />
          <CarouselItem key={index} child={child} width={'4rem'} />
        ))}
      </CarouselScrollContainer>
    </CarouselRoot>
  )
}
