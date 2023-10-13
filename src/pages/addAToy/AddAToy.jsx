import React, { useContext, useState } from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Swal from 'sweetalert2'
import { AuthContext } from '../../context/AuthProvider';
import UserTitle from '../../components/shared/useTitle/UserTitle';

const AddAToy = () => {

  UserTitle("Add A Toy");
  const {user} = useContext(AuthContext)
  const [categoryValue, setcategoryValue] = useState('');
  const [toyRating, setToyRating] = useState(4);
  // handle Add a toy form data
  const handleAddAToy=(event)=>{
    event.preventDefault();
    const form = event.target;
    const toy_name = form.toy_name.value;
    const picture_url = form.picture_url.value;
    const seller_name = form.seller_name.value;
    const email = form.email.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const addAToy = {toy_name,picture_url,seller_name,email,price,quantity,description,categoryValue,toyRating};
    
    // toy add send data mongodb
    fetch(`http://localhost:5000/toys`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(addAToy)
    })
    .then((res)=>res.json())
    .then((data)=>{
      if(data.insertedId){
        // sweet alert
        Swal.fire({
          title: 'Success!',
          text: 'Congratulation! Toy added successfully.',
          icon: 'success',
          confirmButtonText: 'Close'
        })
        form.reset();
      }
    })
  };

  // Select category value get
  const handleCategory = (event) => {
    setcategoryValue(event.target.value);
  };

  return (
    <div className='py-20'>
      <div className='container mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-10'>Add A Toy</h1>
        <div className='w-1/2 mx-auto border p-10 rounded-lg'>
            <form onSubmit={handleAddAToy}>
                <div className='mb-3'>
                    <label className="label">
                        <span className="label-text text-base font-medium">Toy Name</span>
                    </label>
                    <input type="text" name='toy_name' id='toy_name' placeholder="Toy Name" className="input input-bordered w-full" required/>
                </div>
                <div className='mb-3'>
                    <label className="label">
                        <span className="label-text text-base font-medium">Picture URL</span>
                    </label>
                    <input type="text" name='picture_url' id='picture_url' placeholder="Picture URL" className="input input-bordered w-full" required/>
                </div>
                <div className='mb-3'>
                    <label className="label">
                        <span className="label-text text-base font-medium">Seller Name</span>
                    </label>
                    <input type="text" name='seller_name' id='seller_name' placeholder="Seller Name" defaultValue={user?.displayName} className="input input-bordered w-full" required/>
                </div>
                <div className='mb-3'>
                    <label className="label">
                        <span className="label-text text-base font-medium">Seller Email</span>
                    </label>
                    <input type="email" name='email' id='email' placeholder="Seller Email" defaultValue={user?.email} className="input input-bordered w-full" required/>
                </div>
                <div className='mb-3'>
                    <label className="label">
                        <span className="label-text text-base font-medium">Sub-Category</span>
                    </label>
                    <select className="select w-full input-bordered" onChange={handleCategory} required >
                        <option disabled selected>Pick Sub-Category</option>
                        <option value="Science kits">Science kits</option>
                        <option value="Math learning toys">Math learning toys</option>
                        <option value="Engineering kits">Engineering kits</option>
                        <option value="Language Toys">Language Toys</option>
                        <option value="Engineering tools">Engineering toys</option>
                    </select>                    
                </div>
                <div className='mb-3'>
                    <label className="label">
                        <span className="label-text text-base font-medium">Price</span>
                    </label>
                    <input type="text" name='price' id='price' placeholder="Price" className="input input-bordered w-full" required/>
                </div>
                <div className='mb-3'>
                    <label className="label">
                        <span className="label-text text-base font-medium">Available Quantity</span>
                    </label>
                    <input type="number" name="quantity" id="quantity" placeholder='Available Quantity' className='input input-bordered w-full' required/>
                </div>
                <div className='mb-3'>
                    <label className="label">
                        <span className="label-text text-base font-medium">Detail description</span>
                    </label>
                    <textarea id='description' name='description' className="textarea textarea-lg w-full textarea-bordered" placeholder="Detail description" required></textarea>
                </div>
                <div className='mb-3'>
                    <label className="label">
                        <span className="label-text text-base font-medium">Rating</span>
                    </label>
                    <Stack spacing={1}>
                        <Rating name="half-rating"  onChange={(event,newValue) => {setToyRating(newValue)}}  defaultValue={4.0} precision={0.5} aria-required/>
                    </Stack>
                </div>
                <input type="submit" className='py-3 cursor-pointer px-10 bg-orange-400 text-white font-semibold rounded-md text-base hover:bg-black duration-500' value="Add A Toy" />
            </form>
        </div>
      </div>
    </div>
  )
}

export default AddAToy