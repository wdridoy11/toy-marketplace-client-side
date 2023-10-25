import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthProvider';
import logo from '../../../assets/logo.png';

const Footer = () => {
  const {user} = useContext(AuthContext);
  return (
    <footer>
        <div className="py-14 bg-base-200 text-base-content">
            <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div>
                    <Link to={'/'}>
                        <img className='w-32' src={logo} alt="logo" />
                        <span className='text-black font-semibold'>Educational toy</span>
                    </Link>
                    <p className='mt-3 text-[15px] font-normal'>Mithapukur Upazila, Rangpur, Bangladesh</p>
                </div> 
                <div className='flex flex-col gap-2'>
                    <h3 className='text-lg font-semibold text-black footer-title'>Navigation</h3>
                    <Link className='text-base font-medium text-black' to={`/`}>Home</Link>
                    <Link className='text-base font-medium text-black' to={`/all_toys`}>All Toys</Link>
                    {user && <Link className='text-base font-medium text-black' to={`/my_toys`}>My Toys</Link>}
                    {user && <Link className='text-base font-medium text-black' to={`/add_a_toy`}>Add A Toy</Link>}
                    <Link className='text-base font-medium text-black' to={`/blogs`}>Blogs</Link>
                </div> 
                <div className='flex flex-col gap-2'>
                    <h3 className='text-lg font-semibold text-black footer-title'>Contact  Us</h3>
                    <Link className='flex gap-2 items-center text-base font-semibold'><FaPhoneAlt /> 01700000000</Link>
                    <Link className='flex gap-2 items-center text-base font-semibold'><FaEnvelope /> developerridoy11@gmail.com</Link>
                </div> 
                <div>
                    <h3 className='text-lg font-semibold text-black footer-title'>Follow Us</h3>
                    <div className='flex gap-2'>
                        <Link to={`https://web.facebook.com/wdridoy11`} target='_blank' className='text-xl bg-black text-white p-3 rounded-full'>
                            <FaFacebookF />
                        </Link>
                        <Link to={`https://twitter.com/wdridoy11`} target='_blank' className='text-xl bg-black text-white p-3 rounded-full'>
                            <FaTwitter />
                        </Link>
                        <Link to={`https://www.instagram.com/wdridoy11`} target='_blank' className='text-xl bg-black text-white p-3 rounded-full'>
                            <FaInstagram />
                        </Link>
                        <Link to={`https://www.linkedin.com/in/wdridoy11`} target='_blank' className='text-xl bg-black text-white p-3 rounded-full'>
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-center bg-black text-white py-7'>
            <p className='text-base font-normal'>Copyright &copy; 2023 | Educational toy</p>
        </div>
    </footer>
  )
}

export default Footer