import React from 'react'
import Hero from '../hero/Hero'
import About from '../../about/About'
import UserTitle from '../../../components/shared/useTitle/UserTitle'

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