import React from 'react'
import { Link } from 'react-router-dom'
import offer from '../../../assets/offer.png'
import offer1 from '../../../assets/offer-01.png'

const Offer = () => {
  return (
    <div className='py-10'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 gap-5'>
                <div className='grid grid-cols-2 p-10 items-center bg-red-500 rounded-md'>
                    <div>
                        <img className='w-3/5' src={offer} alt="" />
                    </div>
                    <div>
                        <h3 className='text-4xl font-semibold text-white mb-2'>Stuffed Animals</h3>
                        <Link className='px-7 py-3 rounded-full bg-white text-black text-base font-medium inline-block
                        hover:bg-black hover:text-white duration-500' to={'http://localhost:3000/all_toys'}>Shop Now</Link>
                    </div>
                </div>
                <div className='grid grid-cols-2 p-10 items-center bg-[#FFC22C] rounded-md'>
                    <div>
                        <img className='w-4/5' src={offer1} alt="" />
                    </div>
                    <div>
                        <h3 className='text-4xl font-semibold text-white mb-2'>Wooden Toys</h3>
                        <Link className='px-7 py-3 rounded-full bg-white text-black text-base font-medium inline-block
                        hover:bg-black hover:text-white duration-500' to={'http://localhost:3000/all_toys'}>Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offer