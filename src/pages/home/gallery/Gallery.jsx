import React from 'react'
import "./gallery.css"
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';


const Gallery = () => {
const galleryImage=[
  {
    title:"Engineer kits",
    img:"https://img.freepik.com/free-photo/father-son-making-robot_23-2148863387.jpg?w=1380&t=st=1684493347~exp=1684493947~hmac=43aabc43298fb39aa4427aaa766a3e5cb614edbe8b8beac80963cf2f030982ce"
  },
  {
    title:"Math learning",
    img:"https://img.freepik.com/free-photo/schoolgirl-sitting-with-puzzles_23-2147663922.jpg?w=1380&t=st=1684493604~exp=1684494204~hmac=19462ea92c34f794fcf4864476cfcdb0c3c7c6884c4e7715ebbf56aff548afc6"
  },
  {
    title:"Engineer kits",
    img:"https://img.freepik.com/free-photo/two-friends-doing-science-experiments-with-robotic-car_23-2148778943.jpg?w=1380&t=st=1684493325~exp=1684493925~hmac=d6d654b0cd681ade802a3af5cba919e8f8d1e0a72a16ccca9eff16505dbf877d"
  },
  {
    title:"Science kits",
    img:"https://img.freepik.com/free-photo/little-girl-as-chemist-doing-experiment-with-chemical-fluid-laboratory_155003-2186.jpg?w=1380&t=st=1684493490~exp=1684494090~hmac=352e68e5023c1b4e1cdfa6205ba777c2857f704f432b397901843fe75b1fb567"
  },
  {
    title:"Engineer kits",
    img:"https://img.freepik.com/free-photo/front-view-young-child-looking-camera_23-2148321441.jpg?w=1380&t=st=1684493736~exp=1684494336~hmac=ab0eb4413943d2cf5af87a11aa0d0e8a8ee58feb51195b3b0bac8c434d93a068"
  },
  {
    title:"Engineer kits",
    img:"https://img.freepik.com/free-photo/child-making-robot_23-2148863370.jpg?w=1380&t=st=1684493442~exp=1684494042~hmac=ce09e5190bac788195c65528c8473cb3f033718bfbe4cb888d0c1c5c9030d51e"
  },
  {
    title:"Math learning",
    img:"https://img.freepik.com/free-photo/thoughtful-boy-with-puzzle-toys_23-2147663957.jpg?w=1380&t=st=1684493627~exp=1684494227~hmac=d61493e67e5f7b6d6dd5416315d695170f6fa4d91dd7d0945cb454460d334a08"
  },
  {
    title:"Science kits",
    img:"https://img.freepik.com/free-photo/front-view-male-scientist-special-protective-suit-holding-microscope_140725-82803.jpg?w=1380&t=st=1684493534~exp=1684494134~hmac=db93bcd2c361049e5496b542a7a5ff74ac1db80dd3569797ab6f84c7adb14ac5"
  },
  {
    title:"Math learning",
    img:"https://img.freepik.com/free-photo/medium-shot-boy-holding-wooden-toy_23-2149355238.jpg?w=1380&t=st=1684494362~exp=1684494962~hmac=7cdd441647fcb0efebaadd8d9457bc3237d89d09f470962b2b3f3f27eb2b1109"
  },
]
  return (
    <div className='pb-20'>
        <div className='container mx-auto'>
            <div>
                <h1 className='text-5xl font-semibold text-center mb-10'>Gallery</h1>
            </div>
            <div>
            <LightGallery plugins={[lgZoom, lgVideo]} mode="lg-fade">
              {galleryImage.map((gallery, index)=><>
                  <a href={gallery.img} key={index} className='w-full md:w-1/2 p-2 lg:w-1/3'>
                      <img className='img-responsive w-full h-[320px] rounded-t-lg' src={gallery.img} alt={gallery.title} />
                      <h3 className='text-2xl font-semibold -mt-5 text-black block glass p-2'>{gallery.title}</h3>
                  </a>
               </>)}
            </LightGallery>
            </div>
        </div>
    </div>
  )
}

export default Gallery