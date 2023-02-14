import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { recoilDetailData } from '../../recoil/atom'


export default function DetailInfo() {
    const [detailPosts, setDetailPosts] = useRecoilState(recoilDetailData)
    const [qwe,setQwe] = useState([])
    /* const wdlkwdk = Object.entries(detailPosts)
    console.log(detailPosts.RCP_PARTS_DTLS.slice(1,5))
    console.log(wdlkwdk.filter((key)=>key.indexOf("H")))  */
    const wdqwd = Object.entries(detailPosts).map(item => detailPosts[item]);
    console.log(wdqwd)

    /* const found = detailPosts.filter(it => it.includex("http"))
    console.log(found) */
  return (
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
  )
}
