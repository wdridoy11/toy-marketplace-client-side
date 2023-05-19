import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const ToyDetails = () => {
    const toyData = useLoaderData();
    const {name,pictureUrl,sellerName,email,price,quantity,description,selectedValue,ratingValue} = toyData;
    console.log(ratingValue)
  return (
    <div className='py-20'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 gap-10'>
                <div className='border rounded-lg p-10'>
                    <img className='w-full' src={pictureUrl} alt="toy" />
                </div>
                <div className='pt-10'>
                    <h3 className='text-4xl font-semibold mb-5'>{name}</h3>
                    <p className='text-2xl font-semibold text-orange-400'>Price: ${price}</p>
                    <p className='flex text-base font-medium mb-3'>
                        Rating:  
                        <Stack spacing={1}>
                            <Rating name="half-rating"  defaultValue={ratingValue} precision={0.5} readOnly/>
                        </Stack>
                        ({ratingValue})
                    </p>
                    <p className='text-base font-medium text-slate-600'>Category: {selectedValue}</p>
                    <p className='text-base font-medium text-slate-600'>Available quantity: {quantity}</p>
                    <p className='text-base font-medium text-slate-600'>Seller Name: {sellerName}</p>
                    <p className='text-base font-medium text-slate-600'>Seller Email: {email}</p>
                    <p className='text-base font-normal text-slate-600 mt-4'>Description: {description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ToyDetails