import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const MyToy = ({toy,handleDeleteToy}) => {
  const {_id,toy_name,picture_url,seller_name,email,price,quantity,description,categoryValue,toyRating} = toy;
  
  return (
    <>
     <tr>
        <td>
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={picture_url} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
        </td>
        <td>{toy_name.length>20?<>{toy_name.slice(0,20)}...</>:<>{toy_name}</>}</td>
        <td>
            <p className='text-base text-black font-semibold'>{seller_name}</p>
            <p className='text-sm'>{email}</p>
        </td>
        <td>{categoryValue}</td>
        <td>{description.length>20?<>{description.slice(0,20)}...</>:<>{description}</>}</td>
        <td>{toyRating}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td className='flex items-center gap-2'>
            <Link className='p-2 bg-orange-400 text-white rounded-md' to={`/toy_update/${_id}`}><FaEdit></FaEdit></Link>
            <button onClick={()=>handleDeleteToy(_id)} className='p-2 bg-orange-400 text-white rounded-md'><FaTrash></FaTrash></button>
        </td>
      </tr>
    </>
  )
}

export default MyToy