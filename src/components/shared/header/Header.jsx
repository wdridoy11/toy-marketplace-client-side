import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-transparent py-5'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
                <div>
                </div>
                <div className='flex gap-6 items-center'>
                    <Link className='text-base font-medium text-black' to={`/`}>Home</Link>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Header