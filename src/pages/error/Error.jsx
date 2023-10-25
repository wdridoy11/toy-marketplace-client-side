import React from 'react'
import { Link } from 'react-router-dom'
import errorImage from '../../assets/error.jpg'
import UserTitle from '../../components/shared/useTitle/UserTitle'

const Error = () => {
  UserTitle("Error");
  return (
    <div className='py-20'>
        <div className='container mx-auto'>
            <div className='flex flex-col items-center justify-center'>
                <img className='max-w-lg' src={errorImage} alt="" />
                <h1 className='text-7xl font-bold text-black mb-1'>404</h1>
                <h2 className='text-4xl font-semibold text-black mb-4'>Page Not Found!</h2>
                <Link to={'/'} className='inline-block py-3 px-10 bg-orange-400 text-white font-semibold rounded-md hover:bg-black duration-500'>Back to home</Link>
            </div>
        </div>
    </div>
  )
}

export default Error