import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider';
const categoryIcon =`https://cdn-icons-png.flaticon.com/512/3502/3502685.png`;
const quantityIcon =`https://cdn-icons-png.flaticon.com/512/8718/8718777.png`;

const AllToy = ({alltoy}) => {
  const {user} = useContext(AuthContext)
  const {_id, name, pictureUrl, sellerName, price, quantity, selectedValue} = alltoy;
  return (
    <div>
        <div className='border rounded-md'>
          <div className='h-[300px] overflow-hidden'>
              <img className='w-full object-cover' src={pictureUrl} alt="toy_photo" />
          </div>
            <div className='p-5'>
                <h3 className='text-xl font-semibold text-black mb-3'>{name}</h3>
                <p className='text-base font-medium text-orange-400 mb-1'>$: {price}</p>
                <p className='text-base font-medium text-black mb-2 flex items-center gap-2'>
                    <img className='w-5 h-5' src={quantityIcon} alt="" />({quantity})
                </p>
                <div className='flex justify-between'>
                  <p className='text-base font-medium text-black flex items-center gap-1'>
                      <FaUserCircle></FaUserCircle>{sellerName}
                  </p>
                  <p className='text-base font-medium text-black flex items-center gap-1'>
                      <img className='w-4 h-4' src={categoryIcon} alt="categoryIcon" />{selectedValue}
                  </p>
                </div>
                <Link className='inline-block mt-3 py-2 px-5 rounded-md bg-orange-400 text-white font-semibold text-base' to={user ? `/toy_details/${_id}`:`/login`}>View Details</Link>
            </div>
        </div>
    </div>
  )
}

export default AllToy