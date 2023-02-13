import { useEffect, useState } from 'react'
import axios from 'axios'
import './DetailPost.scss'
import { useParams } from 'react-router-dom'

export default function DetailPost() {
  const [detailPosts,setDetailPosts] = useState([])
  const {id} = useParams()
 
  

 
  useEffect(()=>{
    
    const detailData = async ()=>{
      try{
        const json = await axios.get(
          `https://openapi.foodsafetykorea.go.kr/api/22c0222d1bb745cebfb9/COOKRCP01/json/1/100/RCP_NM=${id}`
        )
        console.log(json);
        setDetailPosts(json.data.COOKRCP01.row[0]);
        console.log(detailPosts);
      }catch(err){
        console.log(err)
      }
      
    }
    detailData(); 
  }, [])
 console.log(detailPosts)
 const wjdjdk = () =>{
    if(detailPosts===null){
      return <div>로딩...</div>
    }else{
      detailPosts.filter(a => a.RCP_PAT2 === "반찬") ;
      console.log(detailPosts)
    }

 }
 
 console.log(wjdjdk)
  
  return (
    
    <div className='detail_post'>
      <div className='container'>
        <div className='detail_post_box'>
          <div className="detail_item_left">
            <div className='detail_main_img'>
              <img src={detailPosts.ATT_FILE_NO_MAIN} alt="" />
            </div>
            {/* <ul className='detail_sub_img'>
              <li><img src={detailPosts.MANUAL_IMG01} alt="" /></li>
              <li><img src={detailPosts.MANUAL_IMG02} alt="" /></li>
              <li><img src={detailPosts.MANUAL_IMG03} alt="" /></li>
              <li><img src={detailPosts.MANUAL_IMG04} alt="" /></li>
            </ul> */}
          </div>
          <div className="detail_item_right">
            <div className='detail_name'>
              <h2>{detailPosts.RCP_NM}</h2>
            </div>
            <ul className='detail_cook'>
              <li>{detailPosts.MANUAL01}</li>
              <li>{detailPosts.MANUAL02}</li>
              <li>{detailPosts.MANUAL03}</li>
              <li>{detailPosts.MANUAL04}</li>
              <li>{detailPosts.MANUAL05}</li>
            </ul>
            <ul className='detail_etc'>
              <li>열량 : {detailPosts.INFO_ENG}</li>
              <li>탄수화물 : {detailPosts.INFO_CAR}</li>
              <li>단백질 : {detailPosts.INFO_PRO}</li>
              <li>지방 : {detailPosts.INFO_FAT}</li>
              <li>나트륨 : {detailPosts.INFO_NA}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
