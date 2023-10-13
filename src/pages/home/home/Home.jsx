import React, { useEffect } from 'react'
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// import page
import Hero from '../hero/Hero'
import UserTitle from '../../../components/shared/useTitle/UserTitle'
import About from '../about/About'
import Gallery from '../gallery/Gallery'
import ShopByCategory from '../../shopByCategory/ShopByCategory'
import Subscribe from '../subscribe/Subscribe'
import Blogs from '../../blogs/Blogs';
import AllProducts from '../../allProduct/AllProducts';

const Home = () => {
  UserTitle("Home")
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
  return (
    <div>
      <div data-aos="flip-left"><Hero></Hero></div>
      <div data-aos="fade-right"><About></About></div>
      <AllProducts></AllProducts>
      <div data-aos="zoom-in"><Gallery></Gallery></div>
      <div data-aos="fade-down"><ShopByCategory></ShopByCategory></div>
      <div><Blogs></Blogs></div>
      <div data-aos="flip-up"><Subscribe></Subscribe></div>
    </div>
  )
}

export default Home