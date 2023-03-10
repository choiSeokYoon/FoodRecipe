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
        <div className='banner_img'>
          <div className="banner_left">
            <img src={bannerImg6} alt="베너 이미지" />
          </div>
          <div className='baneer_right'>
            <img src={bannerImg3} alt="베너 이미지" />
            <img src={bannerImg4} alt="베너 이미지" />
            <img src={bannerImg5} alt="베너 이미지" />
            <img src={bannerImg8} alt="베너 이미지" />
          </div>
        </div>
    </div>
  )
}