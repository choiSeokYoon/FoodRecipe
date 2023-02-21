import './Banner.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import bannerImg1 from '../assets/main_1.jpg'
import bannerImg2 from '../assets/main_2.jpg'

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
            <img src={bannerImg1} alt="" />
            <div className="slide_text">
              <p>한끼에 담은 오늘의 </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='swiperSlide'>
            <img src={bannerImg2} alt="" />
            <div className="slide_text" >
              <p>가장 풍요롭고 생생한 시간</p>
            </div>
          </SwiperSlide>
          <div className='swiper_pagination'></div>
        </Swiper>
      </div>
    </div>
  )
}