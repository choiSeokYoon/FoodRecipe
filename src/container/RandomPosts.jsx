import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import {fetchPostData} from '../recoil/selector'
import './RendomPosts.scss'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/pagination";



// import required modules
import { Pagination , Autoplay, Navigation} from "swiper";




export default function RandomPosts() {
    const [swiperRef, setSwiperRef] = useState(null);
    const [posts, setPosts] = useRecoilState(fetchPostData)
    const [randomPosts, setRandomPosts] = useState([])
    
    console.log(posts)
    

    for(let i = 0; i < 10; i++){
        let randomBox = posts[Math.floor(Math.random() * posts.length)]
        randomPosts.push(randomBox)
    }

  return (
    <div className='randomPosts'>
        <div className='container'>
            <div className='title' /* style={{transform: `translateX(${-position}px)`}} */>
                <h1>추천 레시피</h1>
            </div>
            <Swiper
                modules={[Navigation,Autoplay,Pagination]}
                slidesPerView={4}
                spaceBetween={30}
                autoplay={{ delay: 3000 }}
                loop={true}
                breakpoints= {{
                    
                    300:{
                        slidesPerView:2
                    },
                    800:{
                        slidesPerView:3
                    },
                    1000:{
                        slidesPerView:4
                    }
                }} 
                pagination={{
                    type: "progressbar"
                }}
                className="random_slide"
            >
            {randomPosts && randomPosts.map((randomPost,idx)=>(
                <SwiperSlide key={idx} className="slide_list">
                    <div className='random_img'><img src={randomPost.ATT_FILE_NO_MAIN} alt="음식이미지" /></div>
                    <div className='random_text'>
                        <p className='random_cate'>
                            {randomPost.RCP_PAT2}
                        </p>
                        <p className='random_name'>
                            {randomPost.RCP_NM}
                        </p>
                    </div>
                    
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    </div>
  )
}
