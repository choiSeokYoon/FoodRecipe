import './Banner.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import bannerImg7 from '../assets/main7.jpg'
import bannerImg8 from '../assets/main8.jpg'
import bannerImg3 from '../assets/main3.jpg'
import bannerImg4 from '../assets/main4.jpg'
import bannerImg5 from '../assets/main5.jpg'
import bannerImg6 from '../assets/main6.jpg'

export default function Banner() {
  
  return (
    <div className='banner'>
        <div className='slide'>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
              el:".swiper_pagination"
              
            }}
            autoplay={{ 
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={true}
            className="slide_box"
          >
            <SwiperSlide className='swiperSlide'>
              <img src={bannerImg6} alt="" />
              <div className="slide_text">
                <p>한끼에 담은 오늘의 </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiperSlide'>
              <img src={bannerImg7} alt="" />
              <div className="slide_text" >
                <p>가장 풍요롭고 생생한 시간</p>
              </div>
            </SwiperSlide>
            <div className='swiper_pagination'></div>
          </Swiper>
          <div className='baneer_right'>
            <img src={bannerImg3} alt="" />
            <img src={bannerImg4} alt="" />
            <img src={bannerImg5} alt="" />
            <img src={bannerImg8} alt="" />
          </div>
        </div>
    </div>
  )
}