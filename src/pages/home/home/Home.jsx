import React, { useEffect } from 'react'
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// import page
import Hero from '../hero/Hero';
import Offer from '../offer/Offer';
import About from '../about/About';
import Blogs from '../../blogs/Blogs';
import Gallery from '../gallery/Gallery';
import Contact from '../../contact/Contact';
import Subscribe from '../subscribe/Subscribe';
import AllProducts from '../../allProduct/AllProducts';
import Testimonial from '../../testimonial/Testimonial';
import ShopByCategory from '../../shopByCategory/ShopByCategory';
import UserTitle from '../../../components/shared/useTitle/UserTitle';

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
      <Offer></Offer>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <div><Blogs></Blogs></div>
      {/* <div data-aos="flip-up"><Subscribe></Subscribe></div> */}
    </div>
  )
}

export default Home