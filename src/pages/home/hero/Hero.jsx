import React from 'react'
import heroImage1 from '../../../assets/hero-01.jpg'
import heroImage2 from '../../../assets/hero-02.jpg'
import heroImage3 from '../../../assets/hero-03.jpg'
import heroImage4 from '../../../assets/hero-04.jpg'

const Hero = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={heroImage1} className="w-full min-h-screen h-[800px] object-cover bg-opacity-40" alt='hero img' />   
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
        <div className='absolute top-1/3 left-1/3'>
            <div className="max-w-xl text-center text-white">
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
      <div id="slide2" className="carousel-item relative w-full">
        <img src={heroImage3} className="w-full min-h-screen h-[800px] object-cover bg-opacity-40" alt='hero img' /> 
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
        <div className='absolute top-1/3 left-1/3'>
            <div className="max-w-xl text-center text-white">
                <h1 className="mb-5 text-5xl font-bold">Science kits</h1>
                <p className="mb-5"> 
                    Science kits are educational tools designed to engage children and adults in hands-on scientific exploration. 
                    These kits typically include a variety of materials, equipment, and instructions to conduct experiments or 
                    demonstrations related to various scientific disciplines
                </p>
                <button className='py-3 px-10 bg-orange-400 text-white font-semibold rounded-md text-base hover:bg-black duration-500'>Get Started</button>
            </div>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <img src={heroImage2} className="w-full min-h-screen h-[800px] object-cover bg-opacity-40" alt='hero img' /> 
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide4" className="btn btn-circle">❯</a>
          </div> <div className='absolute top-1/3 left-1/3'>
              <div className="max-w-xl text-center">
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
      <div id="slide4" className="carousel-item relative w-full">
        <img src={heroImage4} className="w-full min-h-screen h-[800px] object-cover bg-opacity-40" alt='hero img' /> 
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
        <div className='absolute top-1/3 left-1/3'>
            <div className="max-w-xl text-center text-white">
                <h1 className="mb-5 text-5xl font-bold">Math learning</h1>
                <p className="mb-5"> 
                    Math learning involves the study and application of mathematical concepts and principles to solve problems and 
                    understand the relationships between numbers, quantities, shapes, and patterns
                </p>
                <button className='py-3 px-10 bg-orange-400 text-white font-semibold rounded-md text-base hover:bg-black duration-500'>Get Started</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero