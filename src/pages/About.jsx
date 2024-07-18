import React, { useEffect } from 'react';
import CustomCard from "../components/CustomCard";
import {  FaStar } from "react-icons/fa";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/scrollbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function About() {
  useEffect(() => {
    AOS.init();
    document.title = "About";
    
  }, []);

  return <>
 <section>
<div className='fs-1 fw-bold col-12 text-center py-5 about'>
About
</div>

</section>
  <section>
<div className='container-fluid col-12 '>
    <div className='row '>

<div className='col-12 col-lg-6  align-items-center'>
    <img src="/about-banner .png" alt="" className='img-fluid'/>
</div>
<div className='col-12 col-lg-6 px-3'>
   <p className='mt-4 fs-4'>
What is e-commerce business?</p>
   <p className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting.

slim body with metal cover
latest Intel Core i5-1135G7 processor (4 cores / 8 threads)
8GB DDR4 RAM and fast 512GB PCIe SSD
NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard</p>

</div>
    
</div>
</div>
 <section>
 <div className='fs-1 fw-bold col-12 text-center py-5 about bg-white'>
 Customers Feedback
</div>
<div className='container-fluid mt-3'>
  <div className='row d-lg-none'>
  <Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  spaceBetween={50}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  loop={true} 
  freeMode={true} 
  freeModeMomentum={false} 
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log('slide change')}
>
  
      <SwiperSlide> <CustomCard 
        title={'Lorem ipsum dolor sit amet'}
        content={'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        author={'John Doe'}
        location={'London, UK'}
        avatarUrl={'https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg'}
      /></SwiperSlide>
      <SwiperSlide> <CustomCard 
        title={'Lorem ipsum dolor sit amet'}
        content={'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        author={'John Doe'}
        location={'London, UK'}
        avatarUrl={'https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg'}
      /></SwiperSlide>
      <SwiperSlide> <CustomCard 
        title={'Lorem ipsum dolor sit amet'}
        content={'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        author={'John Doe'}
        location={'London, UK'}
        avatarUrl={'https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg'}
      /></SwiperSlide>
      <SwiperSlide> <CustomCard 
        title={'Lorem ipsum dolor sit amet'}
        content={'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        author={'John Doe'}
        location={'London, UK'}
        avatarUrl={'https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg'}
      /></SwiperSlide>
      ...
    </Swiper>
    
   
  </div>
  <div className='container-fluid mt-3'>
  <div className='row d-none d-lg-block'>
  <Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  spaceBetween={50}
  slidesPerView={3}
  navigation

  loop={true} 
  freeMode={true} 
  freeModeMomentum={false} 
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log('slide change')}
>
  
      <SwiperSlide> <CustomCard 
        title={'Lorem ipsum dolor sit amet'}
        content={'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        author={'John Doe'}
        location={'London, UK'}
        avatarUrl={'https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg'}
      /></SwiperSlide>
      <SwiperSlide> <CustomCard 
        title={'Lorem ipsum dolor sit amet'}
        content={'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        author={'John Doe'}
        location={'London, UK'}
        avatarUrl={'https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg'}
      /></SwiperSlide>
      <SwiperSlide> <CustomCard 
        title={'Lorem ipsum dolor sit amet'}
        content={'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        author={'John Doe'}
        location={'London, UK'}
        avatarUrl={'https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg'}
      /></SwiperSlide>
      <SwiperSlide> <CustomCard 
        title={'Lorem ipsum dolor sit amet'}
        content={'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        author={'John Doe'}
        location={'London, UK'}
        avatarUrl={'https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg'}
      /></SwiperSlide>

    </Swiper>
    
   
  </div></div>
  
    
</div>

 </section>
  </section>
  <section id="section3 " data-aos='fade-up' data-aos-offset='200' data-aos-duration='800'
   className='m-4 '>
    <div className="container col-12 py-4 bg-white  ">
  
      <div className="row">
        <div className=" col-12 col-md-6 col-lg-3">
          <div className="d-flex">
            <div><img src="/download (1).png" alt="" /></div>
            <div className="ms-4"><p className="fw-bold m-0">Free Shipping</p><p className="text-black small">When ordering over $100</p></div>
          </div>
          
        </div>
        <div className=" col-12 col-md-6 col-lg-3">
          <div className="d-flex">
            <div><img src="/download (5).png" alt="" /></div>
            <div className="ms-4"><p className="fw-bold m-0">Free Return</p><p className="text-black small">Get Return within 30 days</p></div>
          </div>
          
        </div>
        <div className=" col-12 col-md-6 col-lg-3">
          <div className="d-flex">
            <div><img src="/download (2).png" alt="" /></div>
            <div className="ms-4"><p className="fw-bold m-0">Secure Payment</p><p className="text-black small">100% Secure Online Payment</p></div>
          </div>
          
        </div>
        <div className=" col-12 col-md-6 col-lg-3">
          <div className="d-flex">
            <div><img src="/download (4).png" alt="" /></div>
            <div className="ms-4"><p className="fw-bold m-0">Best Quality</p><p className="text-black small">Original Product Guarenteed</p></div>
          </div>
          
        </div>
      </div>
    </div>

   </section>

  </>
}
