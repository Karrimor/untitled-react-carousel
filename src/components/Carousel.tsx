import React, { PureComponent } from 'react'
import styled from 'styled-components'
import CarouselItem from './CarouselItem'
import Button from './Button'

const CarouselRoot = styled.div`
  height: 30rem;
`
const CarouselScrollWrapper = styled.div`
  overflow-x: hidden;
  height: 100%;
`

const CarouselItemsContainer = styled('div')<{
  width: string
  translation: string
}>`
  height: 100%;
  display: flex;
  width: ${(props: any) => props.width};
  transform: ${(props: any) => props.translation};
`

interface IProps {
  itemsPerPage: number
  showTitle?: boolean
  carouselHeight?: string
  carouselWidth?: string
}

interface IState {
  numberOfItems: number
  currentTranslation: number
  translationDirection: number
}

export default class Carousel extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      numberOfItems: React.Children.count(this.props.children),
      currentTranslation: 0,
      translationDirection: 1
    }
  }

  getDirection(direction: string, upperLimit: number): any {
    if (direction === 'previous' && this.state.currentTranslation > 0) {
      this.setState({
        currentTranslation: this.state.currentTranslation - 1,
        translationDirection: 1
      })
    } else if (
      direction === 'next' &&
      this.state.currentTranslation < upperLimit
    ) {
      this.setState({
        currentTranslation: this.state.currentTranslation + 1,
        translationDirection: -1
      })
    }
  }

  // This function calculates the translation as IE11 doesn't allow vw or calc() within transforms.
  getTranslation(noOfCarouselPages: number) {
    console.log(
      `translateX(${this.state.translationDirection *
        this.state.currentTranslation *
        (100 / noOfCarouselPages)}%)`
    )

    return `translateX(${this.state.translationDirection *
      this.state.currentTranslation *
      (100 / noOfCarouselPages)}%)`
  }

  render() {
    console.log('currentTranslation ', this.state.currentTranslation)

    // This helps determine the width of the scroll wrapper and the width of each carousel item
    const noOfCarouselPages = Math.ceil(
      this.state.numberOfItems / this.props.itemsPerPage
    )
    const scrollWrapperWidth = `${100 * noOfCarouselPages}%`

    return (
      <CarouselRoot>
        {this.props.showTitle && <h1>This is the title</h1>}
        <Button
          onClick={() => this.getDirection('previous', noOfCarouselPages)}
          ariaLabel="Previous"
          icon="<-"
        />
        <CarouselScrollWrapper className="scroll-wrapper">
          <CarouselItemsContainer
            className="item-container"
            width={scrollWrapperWidth}
            translation={this.getTranslation(noOfCarouselPages)}
          >
            {/* {this.props.children &&
              React.Children.map(this.props.children, (child, index) => (
                <CarouselItem
                  key={index}
                  child={child}
                  width={this.props.itemsPerPage * noOfCarouselPages}
                />
              ))} */}
          </CarouselItemsContainer>
        </CarouselScrollWrapper>
        <Button
          onClick={() => this.getDirection('next', noOfCarouselPages)}
          ariaLabel="Next"
          icon="->"
        />
      </CarouselRoot>
    )
  }
}
