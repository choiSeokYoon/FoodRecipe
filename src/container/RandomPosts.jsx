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
    const randomPosts =new Set();
    
    //
    while(randomPosts.size < 10) {
        const randomIndex = Math.floor(Math.random() * posts.length);
        randomPosts.add(posts[randomIndex])
    }
    const bestRecipe= Array.from(randomPosts)
    
 const dietFood = [...posts];
 dietFood.sort((a, b) => a.INFO_ENG - b.INFO_ENG);
 console.log(dietFood);

  return (
    <div className='randomPosts'>
        <div className='container'>
            <div className='title' /* style={{transform: `translateX(${-position}px)`}} */>
                <h1>추천 레시피</h1>
            </div>
            <div className='recipe1'>
                <div className='recipe1_title'>
                    <h2>RandomRecipe</h2>
                </div>
                <Swiper
                    modules={[Navigation,Autoplay,Pagination,]}
                    slidesPerView={4}
                    spaceBetween={30}
                    autoplay={{ 
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
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
                    /* pagination={{
                        type: "progressbar"
                    }} */
                    className="random_slide"
                >
                {bestRecipe && bestRecipe.map((bestRecipes,idx)=>(
                    <SwiperSlide key={idx} className="slide_list">
                        <div className='random_img'><img src={bestRecipes.ATT_FILE_NO_MAIN} alt="음식이미지" /></div>
                        <div className='random_text'>
                            <p className='random_cate'>
                                {bestRecipes.RCP_PAT2}
                            </p>
                            <p className='random_name'>
                                {bestRecipes.RCP_NM}
                            </p>
                        </div>
                        
                    </SwiperSlide>
                ))}
                </Swiper>
               
            </div>
            <div className='recipe2'>
                 <div className='recipe1_title'>
                    <h2>RandomRecipe</h2>
                </div>
                <Swiper
                    modules={[Navigation,Autoplay,Pagination]}
                    slidesPerView={4}
                    spaceBetween={30}
                    autoplay={{ 
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
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
                    className="random_slide"
                >
                        {dietFood && dietFood.map((dietFood,idx)=>(
                    <SwiperSlide key={idx} className="slide_list">
                        <div className='random_img'><img src={dietFood.ATT_FILE_NO_MAIN} alt="음식이미지" /></div>
                        <div className='random_text'>
                            <p className='random_cate'>
                                {dietFood.RCP_PAT2}
                            </p>
                            <p className='random_name'>
                                {dietFood.RCP_NM}
                            </p>
                        </div>
                        
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </div>
    </div>
  )
}
