import React, { useState } from "react";
import "./Section2.scss";
import { useRecoilState, useRecoilValue } from "recoil";
import { fetchPostData } from "../recoil/selector";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { SwiperOptions } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination, Autoplay } from "swiper";

export default function Section2() {
  type Swiper = any; //스와이퍼가 어떤 타입인지 못찾음 나중에라도 찾아서 해결해야지 ㅠㅠ
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);
  const posts = useRecoilValue(fetchPostData);

  //RCP_PARTS_DTLS 의 밸류값 (문자열)이 짧은 순
  const postsSort = [...posts].sort((a, b) => {
    return a.RCP_PARTS_DTLS.length - b.RCP_PARTS_DTLS.length;
  });
  const simpleRecipe = postsSort.slice(0, 8);
  return (
    <section className="section2">
      <div className="container">
        <div className="title">
          <h1>Simple&Complex</h1>
        </div>
        <div className="simple_recipe">
          <div className="simple_left">
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
              {simpleRecipe.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <Link to={`/detail/${item.RCP_NM}`}>
                    <img src={item.ATT_FILE_NO_MAIN} alt="이미지" />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="simple_right">
            <div className="simple_info">
              <p>Simple Recipe</p>
              <p>
                최소한의 재료로 만드는 간편하고 간단한 음식을 추천해드립니다.
                이러한 레시피는 준비가 간단하고 시간도 적게 걸리기 때문에 바쁜
                일상 속에서도 쉽게 식사를 챙길 수 있습니다. 단, 요리를 할 때는
                안전에 항상 주의를 기울이고, 필요한 조리 도구와 재료를 미리
                준비해두는 것이 좋습니다. 즐거운 요리 시간 보내세요!
              </p>
            </div>
            <div className="simple_slide">
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                loop={true}
                modules={[FreeMode, Navigation, Thumbs, Pagination]}
                className="mySwiper"
              >
                {simpleRecipe.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="simple_slide_box">
                      <img src={item.ATT_FILE_NO_MAIN} alt="이미지" />
                      <p>{item.RCP_NM}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
