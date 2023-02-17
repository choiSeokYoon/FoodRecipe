import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import {recoilDetailData} from '../../recoil/atom'
export default function DetailImg() {
    const [detailPosts,setDetailPosts] = useRecoilState(recoilDetailData)
    
    const arrayAllData = Object.entries(detailPosts).map(([key, value]) => ({ [key]: value }));
    const arrayMANUAL_IMG = arrayAllData.filter((obj) => Object.keys(obj)[0].includes('MANUAL_IMG'));
    const arrayMANUAL = arrayAllData.filter(
      (obj) => Object.keys(obj)[0].includes('MANUAL') && !Object.keys(obj)[0].includes('MANUAL_IMG'),
    );
    

    const askdk = arrayMANUAL.filter((ac) => Object.values(ac)[0].includes("다"))
    
    const eeee = arrayMANUAL_IMG.filter((ac) => Object.values(ac)[0].includes("http"))
    
    
    
  return (
    <div className="detail_item_left">
      <div className='detail_main_img'>
        <img src={detailPosts.ATT_FILE_NO_MAIN} alt="" />
        <div>
          {Object.keys(askdk).map((sdasddd,idx) => (
            <div key={idx}>{sdasddd}</div>
          ))}
        </div>
          {/* {sdasd.map((sdasddd)=>{
            <div>{sdasddd}</div>
          })} */}
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
