import React from 'react'
import heroImage from '../../../assets/hero-02.jpg'
const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${heroImage})`}}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">Engineering kits</h1>
            <p className="mb-5"> 
                Engineering kits are educational tools designed to introduce and engage individuals, particularly 
                children and students, in the field of engineering. These kits typically contain a variety of 
                components, materials, and instructions that allow users to build and experiment with various 
                engineering concepts and principles.
            </p>
            <button className='py-3 px-10 bg-orange-400 text-white font-semibold rounded-md text-base hover:bg-black duration-500'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero