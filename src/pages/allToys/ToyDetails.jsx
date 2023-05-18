import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ToyDetails = () => {
    const toyData = useLoaderData();
    const {name,pictureUrl,sellerName,email,price,quantity,description,selectedValue,reatingValue} = toyData;
  return (
    <div className='py-20'>
        <div className='container mx-auto'>
            <div>
                <img src={pictureUrl} alt="toy" />
                <div>
                    <h3>{name}</h3>
                    <p>{sellerName}</p>
                    <p>{email}</p>
                    <p>{price}</p>
                    <p>{quantity}</p>
                    <p>{description}</p>
                    <p>{selectedValue}</p>
                    <p>{reatingValue}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ToyDetails