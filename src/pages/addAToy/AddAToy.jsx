import React from 'react'

const AddAToy = () => {

  const handleAddAToy=(event)=>{
    
  }


  return (
    <div className='py-20'>
      <div className='container mx-auto'>
        <div className='w-1/2 mx-auto border p-10 rounded-lg'>
            <form>
                <div className='mb-3'>
                    <label className="label">
                        <span className="label-text text-base font-medium">Name</span>
                    </label>
                    <input type="text" name='name' id='name' placeholder="Name" className="input input-bordered w-full" required/>
                </div>
                <div className='mb-3'>
                    <label className="label">
                        <span className="label-text text-base font-medium">Picture URL</span>
                    </label>
                    <input type="text" name='pictureUrl' id='pictureUrl' placeholder="Picture URL" className="input input-bordered w-full" required/>
                </div>
                <div className='mb-3'>
                    <label className="label">
                        <span className="label-text text-base font-medium">Seller Name</span>
                    </label>
                    <input type="text" name='sellerName' id='sellerName' placeholder="Seller Name" className="input input-bordered w-full" required/>
                </div>
                <div className='mb-3'>
                    <label className="label">
                        <span className="label-text text-base font-medium">Seller Email</span>
                    </label>
                    <input type="email" name='sellerEmail' id='sellerEmail' placeholder="Seller Email" className="input input-bordered w-full" required/>
                </div>
                <div className='mb-3'>
                    <label className="label">
                        <span className="label-text text-base font-medium">Sub-Category</span>
                    </label>
                    <select className="select w-full input-bordered">
                        <option disabled selected>Pick Sub-Category</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
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
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <input type="submit" className='py-3 cursor-pointer px-10 bg-orange-400 text-white font-semibold rounded-md text-base hover:bg-black duration-500' value="Add A Toy" />
            </form>
        </div>
      </div>
    </div>
  )
}

export default AddAToy