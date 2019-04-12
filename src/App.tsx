import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import './styles/common.css'
import Carousel from './components/Carousel'
import TestChild from './components/TestChild'
import { CarouselHooks } from './components/CarouselHooks'

class App extends Component {
  render() {
    return (
      <>
        <div style={{ padding: '2rem' }}>
          <Carousel itemsPerPage={3} showTitle>
            <TestChild color="yellow" />
            <TestChild color="red" />
            <TestChild color="green" />
            <TestChild color="blue" />
            <TestChild color="black" />
            <TestChild color="purple" />
            <TestChild color="pink" />
          </Carousel>
        </div>
        <div style={{ padding: '6rem 2rem' }}>
          <h1>This is the carousel with Hooks</h1>

          <CarouselHooks itemsPerPage={3}>
            <TestChild color="green" />
            <TestChild color="pink" />
            <TestChild color="orange" />
            <TestChild color="yellow" />
            <TestChild color="red" />
            <TestChild color="blue" />
          </CarouselHooks>
        </div>
      </>
    )
  }
}

export default App
