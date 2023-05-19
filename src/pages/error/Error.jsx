import React from 'react'
import { Link } from 'react-router-dom'
const errorImage=`https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=826&t=st=1684487939~exp=1684488539~hmac=449f30672df8bd54dac7a5941b2c89939b7ee985b479e869dab8ddedad861a87`;
const Error = () => {
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