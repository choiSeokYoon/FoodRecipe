import React from 'react'
import './Section2.scss'
import dsadsad from '../assets/main4.jpg'
import { useRecoilState, useRecoilValue } from 'recoil';
import { fetchPostData } from './../recoil/selector';
import { Link } from 'react-router-dom';

export default function Section2() {
    const posts = useRecoilValue(fetchPostData)

    //RCP_PARTS_DTLS 의 밸류값 (문자열)이 짧은 순
    const postsSort = [...posts].sort((a, b) => { 
        return a.RCP_PARTS_DTLS.length - b.RCP_PARTS_DTLS.length
    })
    const simpleRecipe = postsSort.slice(0,5)
  return (
    <div className='section2'>
        <div className='container'>
            <div className='title'>
                <h1>간편 레시피</h1>
            </div>
              <div className='simple'>
                  {simpleRecipe.map((item) => (
                      <div className='simple_recipe'>
                          <Link to={`/detail/${item.RCP_NM}`}><img src={item.ATT_FILE_NO_MAIN} alt="" /></Link>
                    </div>
                  ))}
            </div>
        </div>
       
      
    </div>
  )
}
