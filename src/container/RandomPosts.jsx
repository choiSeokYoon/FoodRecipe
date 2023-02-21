
import {  useRecoilValue } from 'recoil'
import {fetchPostData} from '../recoil/selector'
import './RendomPosts.scss'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import { Pagination , Autoplay, Navigation} from "swiper";

export default function RandomPosts() {
    const posts = useRecoilValue(fetchPostData)
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
                    <h2>추천 음식</h2>
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
                        <Link to={`/detail/${bestRecipes.RCP_NM}`}>
                            <div className='random_img'><img src={bestRecipes.ATT_FILE_NO_MAIN} alt="음식이미지" /></div>
                            <div className='random_text'>
                                <p className='random_cate'>
                                    {bestRecipes.RCP_PAT2}
                                </p>
                                <p className='random_name'>
                                    {bestRecipes.RCP_NM}
                                </p>
                            </div>
                        </Link>
                        
                        
                    </SwiperSlide>
                ))}
                </Swiper>
               
            </div>
            <div className='recipe2'>
                 <div className='recipe1_title'>
                    <h2>낮은 열량 음식</h2>
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
                        <Link to={`/detail/${dietFood.RCP_NM}`}>
                            <div className='random_img'><img src={dietFood.ATT_FILE_NO_MAIN} alt="음식이미지" /></div>
                            <div className='random_text'>
                                <p className='random_cate'>
                                    {dietFood.RCP_PAT2}
                                </p>
                                <p className='random_name'>
                                    {dietFood.RCP_NM}
                                </p>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </div>
    </div>
  )
}
