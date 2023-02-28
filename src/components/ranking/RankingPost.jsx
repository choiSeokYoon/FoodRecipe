import React from 'react'
import { useRecoilValue } from 'recoil';
import { fetchPostData } from '../../recoil/selector';
import './RankingPost.scss'


export default function RankingPost() {
    const posts = useRecoilValue(fetchPostData)
    const dietFood = [...posts];
    dietFood.sort((a, b) => a.INFO_ENG - b.INFO_ENG);
    console.log(dietFood);
    
  return (
    (dietFood && 
    <div className='ranking_posts'>
      <div className='container'>
          <div className='title'><h1>랭킹모음</h1></div>
      </div>
        <div className='ranking_box'>
          <ul className='ranking_table'>
            {dietFood.map((item, idx)=>(
              <li className='ranking_list'key={item.id}>
                <p className='num'>{idx+1}</p>
                <div className='ranking_img'>
                  <img src={item.ATT_FILE_NO_MAIN} alt="" />
                </div>
                <div className='ranking_title'>{item.RCP_NM}</div>
                <div className='ranking_nutriment'>{item.INFO_ENG}</div>
                <div className='food_type'>{item.RCP_PAT2}</div>
                <div className='food_tag'>{item.HASH_TAG}</div>
              </li>
              
            ))}
            
            
          </ul>
          <ul className='ranking_category'>
              <li>열량</li>
              <li>탄수화물</li>
              <li>단백질</li>
              <li>지방</li>
              <li>나트륨</li>
          </ul>
        </div>
        
        
    </div>
    )
 )
  
}

