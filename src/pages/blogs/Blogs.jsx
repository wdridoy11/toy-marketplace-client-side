import React, { useEffect, useState } from 'react'
import UserTitle from '../../components/shared/useTitle/UserTitle'
import Blog from './Blog';

const Blogs = () => {

  UserTitle("Blogs");
  const [blogs, setBlogs] = useState();
  useEffect(()=>{
      fetch("https://toy-marketplace-server-nb0ccenf3-developersridoy-gmailcom.vercel.app/blogs")
      .then((res)=>res.json())
      .then((data)=>setBlogs(data))
      .catch((err)=>console.log(err.message))
  },[])

  return (
    <div className='pb-20 pt-10'>
        <div className='container mx-auto'>
            <h1 className='text-5xl font-semibold text-center mb-10'>Our Blog</h1>
            <div className='grid grid-cols-3 gap-5'>
                {blogs?.map((blog)=><Blog key={blog} blog={blog}></Blog>)}
            </div>
        </div>
    </div>
  )
}

export default Blogs