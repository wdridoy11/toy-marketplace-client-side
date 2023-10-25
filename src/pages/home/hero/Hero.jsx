import React from 'react'
import { Link } from 'react-router-dom'
import heroImage1 from '../../../assets/hero-01.jpg'

const Hero = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${heroImage1})`}}>
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">Engineering kits</h1>
          <p className="mb-5"> 
              Engineering kits are educational tools designed to introduce and engage individuals, particularly 
              children and students, in the field of engineering. These kits typically contain a variety of 
              components, materials, and instructions that allow users to build and experiment with various 
              engineering concepts and principles.
          </p>
          <Link to={'/all_toys'} className='py-3 px-10 bg-orange-400 hover:bg-white hover:text-black duration-500 text-white font-semibold text-base rounded-lg'>Get Started</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero