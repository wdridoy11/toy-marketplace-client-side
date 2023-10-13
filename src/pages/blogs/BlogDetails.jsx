import React from 'react'
import { useLoaderData } from 'react-router-dom'

const BlogDetails = () => {
    const blogData = useLoaderData();
    const {image,title, description, } =  blogData;
  return (
    <div className='py-10'>
        <div className='container mx-auto'>
            <div>
                <img className='w-full h-[600px] rounded-md object-cover' src={image} alt={title} />
                <h3 className="text-2xl font-medium my-5">{title}</h3>
                <div>
                    <p className='text-lg font-normal text-[#777] mt-7'>{description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogDetails