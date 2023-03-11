import React, { useState } from 'react'
import './Section2.scss'
import { useRecoilState, useRecoilValue } from 'recoil';
import { fetchPostData } from './../recoil/selector';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Navigation, Thumbs , Pagination , Autoplay } from "swiper";

export default function Section2() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const posts = useRecoilValue(fetchPostData)

    //RCP_PARTS_DTLS 의 밸류값 (문자열)이 짧은 순
    const postsSort = [...posts].sort((a, b) => { 
        return a.RCP_PARTS_DTLS.length - b.RCP_PARTS_DTLS.length
    })
    const simpleRecipe = postsSort.slice(0,8)
  return (
    <div className='section2'>
        <div className='container'>
            <div className='title'>
                <h1>간편 레시피</h1>
            </div>
            <div className='simple_recipe'>
              <div className='simple_left'>
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop={true}
                
                pagination={{
                  type: "fraction",
                  clickable: true,
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Pagination, Autoplay]}
                className="mySwiper2"
              >
              {simpleRecipe.map((item,idx)=>(
                <SwiperSlide key={idx}>
                  <Link to={`/detail/${item.RCP_NM}`}>
                    <img src={item.ATT_FILE_NO_MAIN} />
                  </Link>
                </SwiperSlide>
              ))}
              </Swiper>
            </div>
              <div className='simple_right'>
                <div className='simple_info'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  <p>데이터에서 재료가 가장 짧은 순서대로 8개를 뽑아 배치했습니다.</p> 
                </div>
                <div className='simple_slide'>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    loop={true}
                    modules={[FreeMode, Navigation, Thumbs, Pagination]}
                    className="mySwiper"
                  >
                  {simpleRecipe.map((item,idx)=>(
                    <SwiperSlide key={idx}>
                      <div className='simple_slide_box'>
                        <img src={item.ATT_FILE_NO_MAIN} />
                        <p>{item.RCP_NM}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
                
            </div>
          </div>
        </div>
    </div>
  )
}
