import React, { useEffect, useState } from 'react'
import AllToy from './AllToy'

const AllToys = () => {
  const [allToysData,setAllToysData] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(()=>{
    fetch(`http://localhost:5000/toys`)
    .then((res)=>res.json())
    .then((data)=>{
      setAllToysData(data)
    })
  },[])

  const handleSearch=()=>{
    fetch(`http://localhost:5000/toySearchByName/${searchText}`)
    .then((res)=>res.json())
    .then((data)=>{
      setAllToysData(data)
    })
  }

  return (
    <div className='py-20'>
      <div className='container mx-auto'>
        <div className='text-center mb-10'>
          <input 
              type="search" 
              name="search" 
              id="search" 
              onChange={(e)=>setSearchText(e.target.value)}
              className='input input-bordered w-full max-w-md' 
              placeholder='Search here...' 
          />
          <button onClick={handleSearch} className='py-3 rounded-lg px-5 bg-orange-400 text-white font-semibold text-base ml-2'>Search</button>
        </div>
        <div className='grid grid-cols-4 gap-7'>
          {allToysData.map((allToy)=><AllToy key={allToy._id} allToy={allToy}></AllToy>)}
        </div>
      </div>
    </div>
  )
}

export default AllToys