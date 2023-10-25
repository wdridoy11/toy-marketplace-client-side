import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2';
import UserTitle from '../../components/shared/useTitle/UserTitle';

const UpdateToy = () => {

    UserTitle("Update Toy");
    const toyUpdateData = useLoaderData();
    const {_id,price,quantity,description} = toyUpdateData;

    // handle updatae data
    const handleUpdateData = (event)=>{
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updateToy = {price,quantity,description};
        
        // update handle api
        fetch(`https://toy-marketplace-server-nb0ccenf3-developersridoy-gmailcom.vercel.app/toys/${_id}`,{
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


  return (
    <div className='py-20'>
      <div className='container mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-10'>Add A Toy</h1>
        <div className='w-1/2 mx-auto border p-10 rounded-lg'>
            <form onSubmit={handleUpdateData}>
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
                <input type="submit" className='py-3 cursor-pointer px-10 bg-orange-400 text-white font-semibold rounded-md text-base hover:bg-black duration-500' value="Add A Toy" />
            </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateToy