import React, { useContext } from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { AuthContext } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';

const ToysCard = ({toy}) => {
  const {user}= useContext(AuthContext)
    const {_id,toy_name,picture_url,seller_name,email,price,quantity,description,categoryValue,toyRating} = toy;
  return (
    <div>
        <div className='border rounded-md'>
          <div className='h-[300px] overflow-hidden'>
              <img className='w-full object-cover' src={picture_url} alt="toy_photo" />
          </div>
            <div className='p-5'>
                <h3 className='text-xl font-semibold text-black mb-3'>{toy_name}</h3>
                <p className='text-base font-medium text-orange-400 mb-1'>$: {price}</p>
                <p className='flex text-base font-medium mb-3'>
                    <Stack spacing={1}>
                        <Rating name="half-rating"  defaultValue={toyRating} precision={0.5} readOnly/>
                    </Stack>({toyRating})
                    </p>
                <Link className='inline-block mt-3 py-2 px-5 rounded-md bg-orange-400 text-white font-semibold text-base' to={user ? `/toy_details/${_id}`:`/login`}>View Details</Link>
            </div>
        </div>
    </div>
  )
}

export default ToysCard