import React, { useEffect, useState } from 'react'
import AllProduct from './AllProduct';
import AllToy from '../allToys/AllToy';

const AllProducts = () => {

  const [allProducts, setAllProducts] = useState();
  useEffect(()=>{
      fetch("http://localhost:5000/toys")
      .then((res)=>res.json())
      .then((data)=>setAllProducts(data))
      .catch((err)=>console.log(err.message))
  },[])

console.log(allProducts)
  return (
    <div className='py-20'>
      <div className='container mx-auto'>
        <h1 className='text-5xl font-semibold text-center mb-10'>All Toys</h1>
        <div className='grid grid-cols-4 gap-5'>
          {allProducts && allProducts.slice(0,8).map((product)=><AllToy key={product._id} allToy={product}></AllToy>)}
        </div>
      </div>
    </div>
  )
}

export default AllProducts