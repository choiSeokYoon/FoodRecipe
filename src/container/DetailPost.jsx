import { useEffect, useState } from 'react'
import axios from 'axios'
import './DetailPost.scss'
import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import {recoilDetailData} from '../recoil/atom'
import DetailImg from '../components/detail/DetailImg'
import DetailInfo from '../components/detail/DetailInfo'
 
export default function DetailPost() {
  const [detailPosts,setDetailPosts] = useRecoilState(recoilDetailData)
  const {id} = useParams()

  useEffect(()=>{
    const detailData = async ()=>{
      try{
        const json = await axios.get(
          `https://openapi.foodsafetykorea.go.kr/api/2996df137a4d4756867f/COOKRCP01/json/1/100/RCP_NM=${id}`
        )
        setDetailPosts(json.data.COOKRCP01.row[0]);
      }catch(err){
        console.log(err)
      }
    }
    detailData();     
  }, [id])
  
  return (
    detailPosts && (
      
      <div className='detail_post'>
       
        <div className='container'>
          <div className='detail_post_box'>
            <DetailImg/>
            <DetailInfo/>
          </div>
        </div>
      </div>
    )
    
  )
}
