import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import {recoilDetailData} from '../../recoil/atom'
import './DetailImg.scss'
export default function DetailImg() {
  const [detailPosts,setDetailPosts] = useRecoilState(recoilDetailData)
  const [selectedImageUrl, setSelectedImageUrl] = useState(detailPosts.ATT_FILE_NO_MK);
  const [active, setActive] = useState(0)



  const detailManualImg = Object.keys(detailPosts)
  .filter(key => key.includes("MANUAL_IMG") && detailPosts[key] !== "")
  .map(key => detailPosts[key]).sort()
  
  detailManualImg.unshift(detailPosts.ATT_FILE_NO_MK) //메인 이미지도 detailManualImg안에 넣어줌

  const handleClick = (idx) => {
    setActive(0)
    setSelectedImageUrl(idx)
    
  }
  
  console.log(selectedImageUrl)
  return (
    <div className="detail_item_left">
      <div className='detail_main_img'>
        <img src={selectedImageUrl} alt="" />
      </div>
        
      <div className='sub_img'>
        {detailManualImg.map((detailManualImgs,idx) => (
            <img src={detailManualImgs} alt="만드는과정이미지"  
            className={active === idx ? 'active' : ""}
            onClick={()=> handleClick(detailManualImgs)}
          />
        ))}
      </div>
    </div>
    
  )
}
