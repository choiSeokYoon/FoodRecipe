
import {  useRecoilValue } from 'recoil'
import {fetchPostData} from '../../recoil/selector'
import './SectionSlide.scss'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination, Autoplay  } from "swiper";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';



export default function RandomPosts() {
    const posts = useRecoilValue(fetchPostData)
    const randomPosts =new Set();
    //
    
    while(randomPosts.size < 20) {
        const randomIndex = Math.floor(Math.random() * posts.length);
        randomPosts.add(posts[randomIndex])
    }
    
    
    const bestRecipe= Array.from(randomPosts)
    console.log(bestRecipe)


  return (
    <div className='section1'>
        <div className='slide'>
        <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 5,
          slideShadows: true,
        }}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        /* pagination={true} */
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="slide_box"
      >
        {bestRecipe.map((item)=>(
            <SwiperSlide>
              <Link to={`/detail/${item.RCP_NM}`}>
                <img src={item.ATT_FILE_NO_MAIN}/>
              </Link>
                
            </SwiperSlide>
        ))}
      </Swiper>
        </div>
    </div>
  )
}