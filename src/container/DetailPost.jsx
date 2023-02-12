import { useEffect, useState } from 'react'
import axios from 'axios'
import './DetailPost.scss'
import { useParams } from 'react-router-dom'

export default function DetailPost() {
  const [detailPosts,setDetailPosts] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    axios.get(`https://openapi.foodsafetykorea.go.kr/api/22c0222d1bb745cebfb9/COOKRCP01/json/1/100/RCP_NM=${id}`)
    .then((res)=>{
      setDetailPosts(res.data.COOKRCP01.row[0])
    })
  },[])
  console.log(detailPosts)
  return (
    <div>
      <div>{detailPosts.RCP_NM}</div>
    </div>
  )
}
