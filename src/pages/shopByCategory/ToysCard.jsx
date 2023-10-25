import React, { useContext } from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Swal from 'sweetalert2'
import "./toyCard.css"
import { AuthContext } from '../../context/AuthProvider';
import {useNavigate } from 'react-router-dom';

const ToysCard = ({toy}) => {
  
  const {_id,toy_name,picture_url, price, toyRating} = toy;
  const {user}= useContext(AuthContext);
  const navigate= useNavigate();
  
  const handleUserChack =()=>{
    if(user){
      navigate(`/toy_details/${_id}`)
    }else{
      Swal.fire({
        title: 'Please Login',
        text: 'You have to log in first to view details',
        icon: 'warning',
        confirmButtonText: 'Close',
      })
      navigate(`/login`)
    }
  }

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
                <button onClick={handleUserChack} className='inline-block mt-3 py-2 px-5 rounded-md bg-orange-400 hover:bg-black duration-500 text-white font-semibold text-base'>View Details</button>
            </div>
        </div>
    </div>
  )
}

export default ToysCard