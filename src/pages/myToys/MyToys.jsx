import React, { useContext, useEffect, useState } from 'react'
import MyToy from './MyToy';
import Swal from 'sweetalert2'
import { AuthContext } from '../../context/AuthProvider';

const MyToys = () => {
  const {user} = useContext(AuthContext);
  const [myToyData,setMyToyData] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:5000/mytoyMarketplace?email=${user?.email}`)
    .then((res)=>res.json())
    .then((data)=>{
      setMyToyData(data)
    })
  },[user])

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
        fetch(`http://localhost:5000/toyMarketplace/${id}`,{
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

  return (
    <div className='py-20'>
      <div className='container mx-auto'>
        <div>
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