import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

import AllToy from './AllToy'

const AllToys = () => {

  useEffect(()=>{
    AOS.init({duration:2000});
  },[])

  const [allToysData,setAllToysData] = useState([]);
  const [searchText, setSearchText] = useState("");

  // toys pagination system
  const {totalToys} = useLoaderData();
  const [currentPage,setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const perPage = Math.ceil(totalToys / itemsPerPage);
  const pageNumber = [...Array(perPage).keys()];

  // item options
  const options =[5,10,15,20];
  const handleSelectedChange=(event)=>{
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(0)
  }

  // get data and pagination data
  useEffect(()=>{
   async function fetchData(){
      fetch(`https://toy-marketplace-server-nb0ccenf3-developersridoy-gmailcom.vercel.app/toys?page=${currentPage}&limit=${itemsPerPage}`)
      .then((res)=>res.json())
      .then((data)=>{
        setAllToysData(data)
      })
  } 
  fetchData();
  },[currentPage,itemsPerPage])

   // all toys search data
  const handleSearch=()=>{
    fetch(`https://toy-marketplace-server-nb0ccenf3-developersridoy-gmailcom.vercel.app/searyToys/${searchText}`)
    .then((res)=>res.json())
    .then((data)=>{
      setAllToysData(data)
    })
  }

  return (
      <div className='py-20' data-aos="zoom-in">
          <div className='container mx-auto'>
              <div className='text-center mb-10'>
                  <input 
                      type="search" 
                      name="search" 
                      id="search" 
                      onChange={(e)=>setSearchText(e.target.value)}
                      className='input input-bordered w-full max-w-md' 
                      placeholder='Search here...' />
                  <button onClick={handleSearch} className='py-3 rounded-lg px-5 bg-orange-400 text-white font-semibold text-base ml-2'>Search</button>
              </div>
              <div className='grid grid-cols-4 gap-7'>
                  {allToysData.map((allToy)=><AllToy key={allToy._id} allToy={allToy}></AllToy>)}
              </div>
              {/* pagination */}
              <div className='flex items-center justify-center gap-10 pt-16'>
                  <div>
                    {pageNumber.map((number)=><button 
                       key={number}
                       className='px-4 py-3 mx-1 bg-orange-400 text-base font-medium text-white rounded-lg'
                       onClick={()=>setCurrentPage(number)}
                    >{number +1}</button>)}
                  </div>
                  <div>
                      <select className='select select-bordered' value={itemsPerPage} onChange={handleSelectedChange}>
                        {options.map((option)=><option key={option} value={option}>{option}</option>)}
                      </select>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default AllToys