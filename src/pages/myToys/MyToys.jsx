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
  console.log(myToyData)

  return (
    <div>
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
                    toy={toy}>
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