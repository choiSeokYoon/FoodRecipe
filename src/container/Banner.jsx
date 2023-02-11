import './Banner.scss'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay} from "swiper";
import bannerImg1 from '../assets/main_1.jpg'
import bannerImg2 from '../assets/main_2.jpg'
export default function Banner() {
    
  return (
    <div className='banner'>
        <div className='slide'>
            <Swiper
                modules={[Navigation, Pagination,Autoplay]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                autoplay={{ delay: 3000 }}
                className="slide_box"
            >
            <SwiperSlide className='swiperSlide'><img src={bannerImg1} alt="" /></SwiperSlide>
            <SwiperSlide className='swiperSlide'><img src={bannerImg2} alt="" /></SwiperSlide>
        
      </Swiper>
        </div>
    </div>
  )
}
