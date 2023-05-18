import React, { useEffect, useState } from 'react'
import MyToy from './MyToy'

const MyToys = () => {

  const [myToyData,setMyToyData] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/toyMarketplace`)
    .then((res)=>res.json())
    .then((data)=>{
      setMyToyData(data)
    })
  },[])

  const handleDeleteToy=(id)=>{
      console.log(id)
      fetch(`http://localhost:5000/toyMarketplace/${id}`,{
        method:"DELETE",
        headers:{
          "content-type":"application/json"
        }
      })
      .then((res)=>res.json())
      .then((data)=>{
        const remaining = myToyData.filter(toy=>toy._id !== id);
        setMyToyData(remaining);
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