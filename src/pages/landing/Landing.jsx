import React from 'react'
import { NavBar,TabBar } from '../../global/components/navBar'
import Hero from './components/hero'
import ImageCollection from '../imagecollection'

const Landing = () => {
  return (
    <>
      <NavBar/>
      <TabBar/>
      <Hero/>
      <ImageCollection/>
    </>
  )
}

export default Landing
