import React from 'react'
import { useRecoilState } from 'recoil'
import {recoilDetailData} from '../../recoil/atom'
export default function DetailImg() {
    const [detailPosts,setDetailPosts] = useRecoilState(recoilDetailData)
    const sdakfkd = detailPosts.ATT_FILE_NO_MAIN.indexOf("w")
    console.log(sdakfkd)
  return (
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
  )
}
