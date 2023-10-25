import React from 'react'
import { Link } from 'react-router-dom';

const Blog = ({blog}) => {
  const {image,title, description, _id} =  blog;
  return (
    <div>
        <div className="shadow-xl rounded-b-lg pb-2 mt-4">
            <img className='h-[250px] w-full object-cover rounded-t-md' src={image} alt="" />
            <div className="p-5">
               <h3 className="text-xl text-black font-semibold">{title.length>40 ? `${title.slice(0,40)} ...`:title}</h3>
               <p className="text-base text-slate-400 font-normal my-2">{description.length > 150 ? `${description.slice(0,150)}...`:description}</p>
               <Link to={`/blogs/${_id}`} className='inline-block mt-3 py-2 px-5 rounded-md bg-orange-400 hover:bg-black duration-500 text-white font-semibold text-base'>Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default Blog