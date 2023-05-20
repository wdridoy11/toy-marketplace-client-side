import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToysCard from './ToysCard';



const ShopByCategory = () => {
  const [toysData,setToysData] = useState([]);
  const handleClick=(categoryText)=>{
    fetch(`http://localhost:5000/category/${categoryText}`)
    .then((res)=>res.json())
    .then((data)=>setToysData(data))
  }
  return (
    <div>
        <div className='container mx-auto'>
            <Tabs>
              <TabList>
                <Tab onClick={(e)=>handleClick(e.target.innerText)}>Math learning toys</Tab>
                <Tab onClick={(e)=>handleClick(e.target.innerText)}>Science kits</Tab>
                <Tab onClick={(e)=>handleClick(e.target.innerText)}>Engineering tools</Tab>
              </TabList>
              <TabPanel>
                <div className='grid grid-cols-4 gap-7'>
                    {toysData.map((toy)=><ToysCard key={toy._id} toy={toy}></ToysCard>)}
                </div>
              </TabPanel>
              <TabPanel>
                <div className='grid grid-cols-4 gap-7'>
                    {toysData.map((toy)=><ToysCard key={toy._id} toy={toy}></ToysCard>)}
                </div>
              </TabPanel>
              <TabPanel>
                <div className='grid grid-cols-4 gap-7'>
                    {toysData.map((toy)=><ToysCard key={toy._id} toy={toy}></ToysCard>)}
                </div>
              </TabPanel>
            </Tabs>            
        </div>
    </div>
  )
}

export default ShopByCategory