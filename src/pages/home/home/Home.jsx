import React from 'react'
import Hero from '../hero/Hero'
import UserTitle from '../../../components/shared/useTitle/UserTitle'
import About from '../about/About'

const Home = () => {
  UserTitle("Home")
  return (
    <div>
      <Hero></Hero>
      <About></About>
    </div>
  )
}

export default Home