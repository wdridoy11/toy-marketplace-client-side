import React from 'react'
import { FaBeer } from 'react-icons/fa';
const MyToy = ({toy}) => {
    const {name,pictureUrl,sellerName,sellerEmail,price,quantity,description,selectedValue,reatingValue} = toy;
    console.log(toy)
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
            <p className='text-sm'>{sellerEmail}</p>
        </td>
        <td>{selectedValue}</td>
        <td>{description}</td>
        <td>{reatingValue}</td>
        <td>{quantity}</td>
        <td>{price}</td>
      </tr>
    </>
  )
}

export default MyToy