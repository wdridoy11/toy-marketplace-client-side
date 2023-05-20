import React from 'react'
import { Link } from 'react-router-dom'
import aboutImage from '../../../assets/about.png'
import aboutImage2 from '../../../assets/about-02.png'
const About = () => {
  return (
    <div className='py-20'>
        <div className='container mx-auto'>
            <div className='grid lg:grid-cols-2 gap-10'>
                <div className='grid lg:grid-cols-2 gap-5'>
                    <img className='w-full h-[350px] object-bottom object-cover border rounded-lg' src={aboutImage} alt="About img" />
                    <img className='w-full h-[350px] object-cover border mt-5 lg:mt-16 rounded-lg' src={aboutImage2} alt="About img" />
                </div>
                <div>
                    <h4 className='text-3xl font-semibold mb-5'>About Us</h4>
                    <p className='text-base font-normal text-black mb-5'>
                        Educational and learning toys are specially designed playthings that aim to stimulate cognitive development, 
                        enhance learning skills, and promote educational growth in children. These toys are created to be both fun 
                        and educational, offering hands-on experiences that encourage problem-solving, creativity, critical thinking, 
                        and various other essential skills. They come in a wide range of forms, including puzzles, building blocks,
                        science kits, art supplies, board games, coding toys, and more. Educational and learning toys provide 
                        opportunities for children to explore and discover new concepts, develop fine motor skills, expand their 
                        knowledge, and foster a love for learning. By engaging in play-based learning, children can acquire knowledge 
                        and develop important abilities in an enjoyable and interactive manner.
                    </p>
                    <Link className='inline-block py-3 px-7 bg-orange-400 text-white font-semibold text-base rounded-md hover:bg-black duration-500' to={'/'}>Read More</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About