import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const MyToy = ({toy,handleDeleteToy}) => {
  const {_id,name,pictureUrl,sellerName,email,price,quantity,description,selectedValue,reatingValue} = toy;
  return (
    <>
     <tr>
        <td>
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={pictureUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
        </td>
        <td>{name}</td>
        <td>
            <p className='text-base text-black font-semibold'>{sellerName}</p>
            <p className='text-sm'>{email}</p>
        </td>
        <td>{selectedValue}</td>
        <td>{description}</td>
        <td>{reatingValue}</td>
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