import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthProvider';
import logo from '../../../assets/logo.png';
import { FaBars } from 'react-icons/fa';
const Header = () => {

  const [isActive,setActive]=useState("false");
  const {user, userLogout} = useContext(AuthContext);
  
  const handleToggle=()=>{
    setActive(!isActive)
  }
  
  // user login using firebase
  const handleLogout=()=>{
    userLogout()
    .then((result)=>{
      const user = result.user;
      console.log(user)
    })
    .catch((error)=>{
        console.log(error.message)
    })
  }

  return (
    <div className='bg-transparent py-5'>
        <div className='container mx-auto'>
            <div className='flex justify-between md:items-center'>
                <div>
                  <Link to={'/'}> 
                      <img className='w-16 md:w-20' src={logo} alt="" />
                      <span className='text-black font-semibold'>Educational toy</span>
                   </Link>
                </div>
                <button className="absolute top-10 right-3 text-2xl cursor-pointer block md:hidden" onClick={handleToggle}><FaBars></FaBars></button>
                <div className={isActive ? "hidden md:flex md:items-center gap-7 text-white":"flex flex-col mr-7 md:mr-0 md:flex-row gap-7 mt-16 text-white"}>
                    <Link className='text-base font-medium text-black' to={`/`}>Home</Link>
                    <Link className='text-base font-medium text-black' to={`/all_toys`}>All Toys</Link>
                    {user && <Link className='text-base font-medium text-black' to={`/my_toys`}>My Toys</Link>}
                    {user && <Link className='text-base font-medium text-black' to={`/add_a_toy`}>Add A Toy</Link>}
                    <Link className='text-base font-medium text-black' to={`/blogs`}>Blogs</Link>
                    {user?<>
                      <div className="tooltip" data-tip={`${user?.displayName}`}>
                        <img className='w-10 h-10 rounded-full cursor-pointer' src={user?.photoURL} alt="" />
                      </div>
                      <Link className='py-2 px-5 bg-orange-400 text-white rounded-md font-semibold text-base' onClick={handleLogout}>Logout</Link>
                    </>:<Link className='py-2 px-5 bg-orange-400 rounded-md text-white font-semibold text-base' to={'/login'}>Login</Link>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header