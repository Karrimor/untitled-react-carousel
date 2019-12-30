import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CarouselItem from './CarouselItem'
// import useWindowWidth from '../hooks/useWindowWidth'

const CarouselRoot = styled('div')<{
  height: string
  width: string
}>`
  height: ${(props: any) => props.height}rem;
  width: ${(props: any) => props.width ? props.width'rem' : '100%'};
`

const CarouselScrollContainer = styled.div`
  overflow-x: hidden;
  height: 100%;
  display: inline-flex;
`
interface IProps {
  itemsPerPage: number
  carouselHeight?: number // rem will be added to this number
  carouselWidth?: number // rem will be added to this number
}

export const CarouselHooks: React.StatelessComponent<IProps> = ({
  itemsPerPage,
  carouselHeight,
  carouselWidth,
  children
}) => {
  let [childWidth, setChildWidth] = useState(0)
  const [convertedCarouselWidth, setConvertedCarouselWidth] = useState(
    convertCarouselWidth()
  )

  function convertCarouselWidth() {
    if (carouselWidth) {
      const noLetters = carouselWidth.match(/[-]{0,1}[\d]*[\.]{0,1}[\d]+/g)
      if (noLetters) {
        const width = parseInt(noLetters[0]) / itemsPerPage
        console.log('width', width)
        setConvertedCarouselWidth(width)
        return width ? width : 0
      }
    }
  }

  function calculateChildWidth() {
    if (carouselWidth) {
      console.log('carouselWidth ', convertedCarouselWidth / 3)
      // setChildWidth(convertedCarouselWidth / 3)
    } else {
      console.log('else', window.innerWidth / 3)
      // setChildWidth(window.innerWidth / 3)
    }
  }

  // function handleResize() {
  //   console.log('resize width ', window.innerWidth)
  //   setChildWidth(window.innerWidth / 3)
  // }
  // function calculateWindowWidth() {

  // }
  // useEffect(console.log('useEffect'))

  // useEffect(() => {
  //   if (carouselWidth) {
  //     setChildWidth(carouselWidth)
  //   } else {
  //     handleResize()
  //     // const handleResize = () => {
  //     //   console.log('resize width ', window.innerWidth)
  //     //   setChildWidth(window.innerWidth / 3)
  //     // }

  //     window.addEventListener('resize', handleResize)

  //     return () => {
  //       window.removeEventListener('resize', handleResize)
  //     }
  //   }
  // })

  console.log('childWidth', childWidth)

  return (
    <CarouselRoot
      className="carousel-root"
      height={carouselHeight || 30}
      width={carouselWidth || null}
    >
      <CarouselScrollContainer className="carousel-scroll-container">
        {React.Children.map(children, (child, index) => (
          <CarouselItem key={index} child={child} width={'4rem'} />
        ))}
      </CarouselScrollContainer>
    </CarouselRoot>
  )
}
