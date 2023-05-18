import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../../assets/logo.png'
const Footer = () => {
  return (
    <footer className="py-14 bg-base-200 text-base-content">
        <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
            <div>
                <Link to={'/'}><img className='w-32' src={logo} alt="logo" /></Link>
                <p className='mt-3 text-[15px] font-normal lg:pr-5'>
                    Educational and learning toys are specially designed playthings
                    that aim to stimulate cognitive development, enhance learning skills
                </p>
            </div> 
            <div className='flex flex-col gap-2'>
                <h3 className='text-lg font-semibold text-black footer-title'>Navigation</h3>
                <Link className='text-base font-medium text-black' to={'/'}>Home</Link>
                <Link className='text-base font-medium text-black' to={`/`}>All Toys</Link>
                <Link className='text-base font-medium text-black' to={`/`}>My Toys</Link>
                <Link className='text-base font-medium text-black' to={`/`}>Add A Toy</Link>
                <Link className='text-base font-medium text-black' to={`/`}>Blogs</Link>
            </div> 
            <div className='flex flex-col gap-2'>
                <h3 className='text-lg font-semibold text-black footer-title'>Useful Links</h3>
                <Link className='text-base font-medium text-black' to={'/'}>Registration</Link>
                <Link className='text-base font-medium text-black' to={'/'}>Login</Link>
                <Link className='text-base font-medium text-black' to={'/'}>Policy</Link>
                <Link className='text-base font-medium text-black' to={'/'}>Terms & Conditions</Link>
            </div> 
            <div>
                <h3 className='text-lg font-semibold text-black footer-title'>Follow Us</h3>
                <div className='flex gap-2'>
                    <Link className='text-xl bg-black text-white p-3 rounded-full'><FaFacebookF /></Link>
                    <Link className='text-xl bg-black text-white p-3 rounded-full'><FaTwitter /></Link>
                    <Link className='text-xl bg-black text-white p-3 rounded-full'><FaInstagram /></Link>
                    <Link className='text-xl bg-black text-white p-3 rounded-full'><FaLinkedinIn /></Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer