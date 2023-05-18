import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Swal from 'sweetalert2';
import Stack from '@mui/material/Stack';

const UpdateToy = () => {
    const toyUpdateData = useLoaderData();
    const {_id, name, pictureUrl, sellerName, email, price, quantity, description, selectedValue} = toyUpdateData;
    console.log(toyUpdateData)
    // const [selectedValue, setSelectedValue] = useState('');
    const [ratingValue, setRatingValue] = useState();

    const handleUpdateData = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const pictureUrl = form.pictureUrl.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updateToy = {name,pictureUrl,sellerName,email,price,quantity,description,selectedValue,ratingValue};
        
        fetch(`http://localhost:5000/toyMarketplace/${_id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updateToy)
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your Toy data updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
            }
        })
    }

      // Select value get
//   const handleSelectChange = (event) => {
//     setSelectedValue(event.target.value);
//   };


  return (
    <div className='py-20'>
      <div className='container mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-10'>Update: {name}</h1>
        <div className='w-1/2 mx-auto border p-10 rounded-lg'>
            <form onSubmit={handleUpdateData}>
                <div className='mb-3'>
                    <label className="label">
                        <span className="label-text text-base font-medium">Name</span>
                    </label>
                    <input type="text" name='name' id='name' defaultValue={name} placeholder="Name" className="input input-bordered w-full" required/>
                </div>
                <div className='mb-3'>
                    <label className="label">
                        <span className="label-text text-base font-medium">Picture URL</span>
                    </label>
                    <input type="text" name='pictureUrl' id='pictureUrl' defaultValue={pictureUrl} placeholder="Picture URL" className="input input-bordered w-full" required/>
                </div>
                <div className='mb-3'>
                    <label className="label">
                        <span className="label-text text-base font-medium">Seller Name</span>
                    </label>
                    <input type="text" name='sellerName' id='sellerName'  defaultValue={sellerName} placeholder="Seller Name" className="input input-bordered w-full" required/>
                </div>
                <div className='mb-3'>
                    <label className="label">
                        <span className="label-text text-base font-medium">Seller Email</span>
                    </label>
                    <input type="email" name='email' id='email' defaultValue={email} placeholder="Seller Email" className="input input-bordered w-full" required/>
                </div>
                {/* <div className='mb-3'>
                    <label className="label">
                        <span className="label-text text-base font-medium">Sub-Category</span>
                    </label>
                    <select className="select w-full input-bordered" defaultValue={selectedValue} onChange={handleSelectChange} required >
                        <option disabled selected>Pick Sub-Category</option>
                        <option value="Science kits">Science kits</option>
                        <option value="Math learning toys">Math learning toys</option>
                        <option value="Engineering kits">Engineering kits</option>
                        <option value="Engineering tools">Engineering tools</option>
                    </select>                    
                </div> */}
                <div className='mb-3'>
                    <label className="label">
                        <span className="label-text text-base font-medium">Price</span>
                    </label>
                    <input type="text" name='price' id='price' defaultValue={price} placeholder="Price" className="input input-bordered w-full" required/>
                </div>
                <div className='mb-3'>
                    <label className="label">
                        <span className="label-text text-base font-medium">Available Quantity</span>
                    </label>
                    <input type="number" name="quantity" id="quantity" defaultValue={quantity} placeholder='Available Quantity' className='input input-bordered w-full' required/>
                </div>
                <div className='mb-3'>
                    <label className="label">
                        <span className="label-text text-base font-medium">Detail description</span>
                    </label>
                    <textarea id='description' name='description' defaultValue={description} className="textarea textarea-lg w-full textarea-bordered" placeholder="Detail description" required></textarea>
                </div>
                <div className='mb-3'>
                    <label className="label">
                        <span className="label-text text-base font-medium">Rating</span>
                    </label>
                    <Stack spacing={1}>
                        <Rating name="half-rating"  onChange={(event,newValue) => {setRatingValue(newValue)}}  defaultValue={ratingValue} precision={0.5} />
                    </Stack>
                </div>
                <input type="submit" className='py-3 cursor-pointer px-10 bg-orange-400 text-white font-semibold rounded-md text-base hover:bg-black duration-500' value="Add A Toy" />
            </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateToy