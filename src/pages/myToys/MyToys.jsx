import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

import MyToy from './MyToy';
import { AuthContext } from '../../context/AuthProvider';
import UserTitle from '../../components/shared/useTitle/UserTitle';

const MyToys = () => {

  const [myToyData,setMyToyData] = useState([]);
  UserTitle("My Toy")
  const {user} = useContext(AuthContext);
  
  //  only my toys get
  useEffect(()=>{
    fetch(`https://toy-marketplace-server-nb0ccenf3-developersridoy-gmailcom.vercel.app/myToys?email=${user?.email}`)
    .then((res)=>res.json())
    .then((data)=>{
      setMyToyData(data)
    })
    AOS.init({duration:2000});
  },[user])

  // handle delete toys
  const handleDeleteToy=(id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You will delete your toy!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-marketplace-server-nb0ccenf3-developersridoy-gmailcom.vercel.app/toys/${id}`,{
          method:"DELETE",
          headers:{
            "content-type":"application/json"
          }
        })
        .then((res)=>res.json())
        .then((data)=>{
          if(data.deletedCount>0){
            Swal.fire("Deleted!", "Your toy has been deleted successfully", "success");
          }
          const remaining = myToyData.filter(toy=>toy._id !== id);
          setMyToyData(remaining);
        })
      }
    })
  }
  
// sorting by price
 const handleSorting=(text)=>{
  fetch(`https://toy-marketplace-server-nb0ccenf3-developersridoy-gmailcom.vercel.app/myToys/${text}`)
  .then((res)=>res.json())
  .then(data=>{
    setMyToyData(data)
  })
 }
  
  return (
    <div className='py-20' data-aos="zoom-in">
      <div className='container mx-auto'>
        <div>
          <div className='flex justify-end gap-2 mb-5'>
              <button onClick={(e)=>handleSorting(e.target.innerText)} className='py-3 px-5 bg-orange-400 text-white font-semibold rounded-md'>Ascending</button>
              <button onClick={(e)=>handleSorting(e.target.innerText)} className='py-3 px-5 bg-orange-400 text-white font-semibold rounded-md'>Descending</button>
          </div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
            <thead>
                <tr>
                  <th>Toy Picture</th>
                  <th>Name</th>
                  <th>seller Info</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Rating</th>
                  <th>Quantity</th>
                  <th>price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {myToyData.map((toy)=><MyToy 
                    key={toy._id} 
                    toy={toy}
                    handleDeleteToy={handleDeleteToy}>
                </MyToy>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyToys