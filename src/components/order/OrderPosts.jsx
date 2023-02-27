import React from 'react'
import { useRecoilValue } from 'recoil';
import { fetchPostData } from '../../recoil/selector';
import './OrderPosts.scss'


export default function OrderPosts() {
    const posts = useRecoilValue(fetchPostData)
    const dietFood = [...posts];
    dietFood.sort((a, b) => a.INFO_ENG - b.INFO_ENG);
    console.log(dietFood);
  return (
    <>
    (dietFood && 
        <div className='container'>
            <div className='title'><h1>랭킹모음</h1></div>
        </div>
        <ul className='ranking_list'>
            <li>열량</li>
            <li>탄수화물</li>
            <li>단백질</li>
            <li>지방</li>
            <li>나트륨</li>
        </ul>
    )
    </>
  )
  
}

