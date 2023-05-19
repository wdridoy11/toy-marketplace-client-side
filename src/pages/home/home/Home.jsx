import React from 'react'
import Hero from '../hero/Hero'
import UserTitle from '../../../components/shared/useTitle/UserTitle'
import About from '../about/About'
import Gallery from '../gallery/Gallery'

const Home = () => {
  UserTitle("Home")
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Gallery></Gallery>
    </div>
  )
}

export default Home