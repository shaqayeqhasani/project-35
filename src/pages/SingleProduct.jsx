import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function SingleProduct() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <section>
        <div className='container-fluid'>
          <div className='row mt-5'>
            <div className='col-12 col-md-6 d-flex'>
              <Swiper
                modules={[Pagination, A11y, Thumbs]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                watchSlidesProgress
                onSwiper={setThumbsSwiper}
              >
                <SwiperSlide>
                  <img src="/product-details-1.png" alt="" className='w-70 h-100 object-fit-cover' />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/product-details-2.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/product-details-3.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/product-details-4.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/product-details-5.png" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className='col-12 col-md-6'>
              <p className='fs-5'>Samsung Galaxy Z Fold3 5G 3 colors in 512GB</p>
              <p className='text-warning'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </p>
              <p className='small text-secondary'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
              <div>
                <p className='text-secondary'>COLOR</p>
                <button className='bg-black p-1 me-3'></button>
                <button className='bg-white p-1 me-3'></button>
                <button className='bg-danger p-1 me-3'></button>
                <button className='bg-warning p-1 me-3'></button>
              </div>
              <div>
                <p className='small mt-4 mb-0 text-secondary'>SIZE</p>
                <select className='mt-3 px-5 p-2'>
                  <option value='small'>Small</option>
                  <option value='medium'>Medium</option>
                  <option value='large'>Large</option>
                  <option value='very-large'>ExteraLarge</option>
                </select>
              </div>
              <div>
                <button className='bg-black text-white mt-3 px-5 p-2'>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
