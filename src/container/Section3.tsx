import React, { useState } from "react";
import "./Section3.scss";
import {  useRecoilValue } from "recoil";
import { fetchPostData } from "../recoil/selector";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination, Autoplay } from "swiper";
import { type } from "os";

export default function Section2() {
  type Swiper = any; //스와이퍼가 어떤 타입인지 못찾음 나중에라도 찾아서 해결해야지 ㅠㅠ
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);
  const posts = useRecoilValue(fetchPostData);
  
  //RCP_PARTS_DTLS 의 밸류값 (문자열)이 짧은 순
  const postsSort = [...posts].sort((a, b) => {
    return b.RCP_PARTS_DTLS.length - a.RCP_PARTS_DTLS.length;
  });
  const complexRecipe = postsSort.slice(0, 8);

  return (
    <div className="section3">
      <div className="container">
        <div className="complex_recipe">
          <div className="complex_right">
            <Swiper
              
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
              {complexRecipe.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <Link to={`/detail/${item.RCP_NM}`}>
                    <img src={item.ATT_FILE_NO_MAIN} />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="complex_left">
            <div className="complex_info">
              <p>Complex Recipe</p>
              <p>
                복잡하고 어려운 레시피를 시도하는 것은 재미있는 경험이 될 수
                있습니다. 하지만 초보자라면 천천히 단계별로 따라가면서
                시도해보는 것이 좋습니다. 음식을 만들 때는 안전에 항상 주의를
                기울이고, 필요한 조리 도구와 재료를 미리 준비하는 것이 좋습니다.
                즐거운 요리 시간 보내세요!
              </p>
            </div>
            <div className="complex_slide">
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                loop={true}
                modules={[FreeMode, Navigation, Thumbs, Pagination]}
                className="mySwiper"
              >
                {complexRecipe.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="complex_slide_box">
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
  );
}
