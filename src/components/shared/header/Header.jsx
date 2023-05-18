import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthProvider';
import logo from '../../../assets/logo.png'
const Header = () => {
  const {user, userLogout} = useContext(AuthContext);
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
            <div className='flex justify-between items-center'>
                <div>
                  <Link to={'/'}> <img className='w-20' src={logo} alt="" /></Link>
                </div>
                <div className='flex gap-6 items-center'>
                    <Link className='text-base font-medium text-black' to={`/`}>Home</Link>
                    <Link className='text-base font-medium text-black' to={`/all_toys`}>All Toys</Link>
                    {user && <Link className='text-base font-medium text-black' to={`/my_toys`}>My Toys</Link>}
                    {user && <Link className='text-base font-medium text-black' to={`/add_a_toy`}>Add A Toy</Link>}
                    <Link className='text-base font-medium text-black' to={`/blogs`}>Blogs</Link>
                    {user?<>
                      <div className="tooltip" data-tip={`${user?.displayName}`}>
                        <img className='w-10 h-10 rounded-full cursor-pointer' src={user?.photoURL} alt="" />
                      </div>
                      <Link className='py-2 px-5 bg-orange-400 text-white font-semibold text-base' onClick={handleLogout}>Logout</Link>
                    </>:<Link className='py-2 px-5 bg-orange-400 text-white font-semibold text-base' to={'/login'}>Login</Link>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header