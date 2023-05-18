import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider';

const AllToy = ({alltoy}) => {
    const {user} = useContext(AuthContext)
    const {_id,name,pictureUrl,sellerName,email,price,quantity,description,selectedValue,reatingValue} = alltoy;
  return (
    <div>
        <div className='shadow-md rounded-b-md'>
            <img className='w-full h-[250px] object-cover' src={pictureUrl} alt="" />
            <div className='p-5'>
                <h3 className='text-xl font-semibold text-black'>{name}</h3>
                <p className='text-base font-medium text-orange-400'>$: {price}</p>
                <p className='text-base font-medium text-black flex items-center gap-1'><FaUserCircle></FaUserCircle> {sellerName}</p>
                <p className='text-base font-medium text-black'>{selectedValue}</p>
                <p className='text-base font-medium text-black'>{quantity}</p>
                <Link className='inline-block py-2 px-5 bg-orange-400 text-white font-semibold text-base' to={user ? `/toy_details/${_id}`:`/login`}>View Details</Link>
            </div>
        </div>
    </div>
  )
}

export default AllToy