import React, { useEffect, useState } from 'react'
import AllToy from './AllToy'

const AllToys = () => {
  const [allToysData,setAllToysData] = useState([]);
  
  useEffect(()=>{
    fetch(`http://localhost:5000/toyMarketplace`)
    .then((res)=>res.json())
    .then((data)=>{
      setAllToysData(data)
    })
  },[])
  return (
    <div className='py-20'>
      <div className='container mx-auto'>
        <div>
          <input type="search" name="search" id="search" />
        </div>
        <div className='grid grid-cols-4 gap-7'>
          {allToysData.map((allToy)=><AllToy key={allToy._id} allToy={allToy}></AllToy>)}
        </div>
      </div>
    </div>
  )
}

export default AllToys