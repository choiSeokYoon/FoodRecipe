
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
    //set으로 중복없앰
    const recipe = new Set();

    for (let i = 0; i < 20; i++) {
      const randomIndex = Math.floor(Math.random() * posts.length);
      recipe.add(posts[randomIndex]);
    }
  
    //배열로 반환하고 변수에 담음
    const randomRecipe = Array.from(recipe);
    console.log(randomRecipe);


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
        {randomRecipe.map((item, idx)=>(
            <SwiperSlide key={idx}>
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