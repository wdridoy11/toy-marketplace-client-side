import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import test from '../../assets/test-01.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './testimonial.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
// import required modules
import { Pagination } from 'swiper/modules';

import test1 from '../../assets/test-01.jpg'
import test2 from '../../assets/test-02.jpg'
import test3 from '../../assets/test-03.jpg'
import test4 from '../../assets/test-04.jpg'



const testimonialData=[
    {
        id:1,
        image:test1,
        name:"James",
        description:"This educational toy website has been a game-changer for my child's learning journey. The curated selection of toys blends fun and education seamlessly, enriching our child's knowledge and skills. Highly recommended for all parents!"
    },
    {
        id:2,
        image:test2,
        name:"David",
        description:"This educational toy website has transformed the way my child learns and plays. The diverse range of interactive, engaging, and educational toys keeps my child excited about learning. A fantastic resource for parents and children alike!"
    },
    {
        id:3,
        image:test3,
        name:"Robert",
        description:"This website's educational toys are innovative, fostering curiosity and critical thinking in children. They've truly elevated our child's learning experience."
    },
    {
        id:4,
        image:test4,
        name:"Ryan",
        description:"Finding quality educational toys for our kids is now a breeze. The website's user-friendly interface and exceptional customer service make shopping a joy"
    },
]

const Testimonial = () => {
  return (
    <div className='pb-20 pt-10'>
        <div className='container mx-auto'>
            <h1 className='text-5xl font-semibold text-center mb-10'>Testimonial</h1>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {testimonialData.map((testimonial)=><SwiperSlide key={testimonial.id}>
                            <div className='p-10 border rounded-tl-3xl rounded-br-3xl bg-[#F8F8F8] h-[280px]'>
                                <div className='flex items-center gap-3 mb-3'>
                                    <div>
                                        <img className='w-20 h-20 object-cover mx-auto rounded-full ring-2 ring-orange-400' src={testimonial.image} alt="" />
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-medium'>{testimonial.name}</h3>
                                        <Stack spacing={1}>
                                            <Rating name="half-rating"  defaultValue={5} precision={0.5} readOnly/>
                                        </Stack>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-base font-normal text-[#777]'>{testimonial.description}</p>
                                </div>
                            </div>
                    </SwiperSlide>)}
                </Swiper>                
            </div>
        </div>
    </div>
  )
}

export default Testimonial