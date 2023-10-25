import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToysCard from './ToysCard';

const ShopByCategory = () => {

  const [categorysText, setCategorysText] = useState("Math learning toys")
  const [toysData,setToysData] = useState([]);

useEffect(()=>{
  fetch(`https://toy-marketplace-server-nb0ccenf3-developersridoy-gmailcom.vercel.app/categorys/${categorysText}`)
  .then((res)=>res.json())
  .then((data)=>setToysData(data));

},[categorysText])

  return (
    <div className='py-20'>
        <div className='container mx-auto'>
          <h1 className='text-5xl font-semibold text-center mb-10'>Shop by category</h1>
            <Tabs>
              <TabList>
                <Tab onClick={(e)=>setCategorysText(e.target.innerText)}>Math learning toys</Tab>
                <Tab onClick={(e)=>setCategorysText(e.target.innerText)}>Science kits</Tab>
                <Tab onClick={(e)=>setCategorysText(e.target.innerText)}>Engineering tools</Tab>
              </TabList>
              <TabPanel>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-10'>
                    {toysData.map((toy)=><ToysCard key={toy._id} toy={toy}></ToysCard>)}
                </div>
              </TabPanel>
              <TabPanel>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-10'>
                    {toysData.map((toy)=><ToysCard key={toy._id} toy={toy}></ToysCard>)}
                </div>
              </TabPanel>
              <TabPanel>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-10'>
                    {toysData.map((toy)=><ToysCard key={toy._id} toy={toy}></ToysCard>)}
                </div>
              </TabPanel>
            </Tabs>            
        </div>
    </div>
  )
}

export default ShopByCategory