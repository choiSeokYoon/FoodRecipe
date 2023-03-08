import React from 'react'
import './Section2.scss'
import dsadsad from '../assets/main4.jpg'
import { useRecoilState, useRecoilValue } from 'recoil';
import { fetchPostData } from './../recoil/selector';

export default function Section2() {
    const posts = useRecoilValue(fetchPostData)
    
    console.log(posts)
    console.log(posts.RCP_PARTS_DTLS)
    
  return (
    <div className='section2'>
        <div className='container'>
            <div className='title'>
                <h1>간편 레시피</h1>
            </div>
            <div className='simple'>
                <div className='simple_recipe'>
                    <img src={dsadsad} alt="" />
                </div>
                <div className='simple_recipe'>
                    <img src={dsadsad} alt="" />
                </div>
                <div className='simple_recipe'>
                    <img src={dsadsad} alt="" />
                </div>
                <div className='simple_recipe'>
                    <img src={dsadsad} alt="" />
                </div>
                <div className='simple_recipe'>
                    <img src={dsadsad} alt="" />
                </div>

            </div>
        </div>
       
      
    </div>
  )
}
