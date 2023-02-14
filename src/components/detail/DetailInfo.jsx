import React from 'react'
import { useRecoilState } from 'recoil'
import { recoilDetailData } from '../../recoil/atom'


export default function DetailInfo() {
    const [detailPosts, setDetailPosts] = useRecoilState(recoilDetailData)
    const dfoolfd = Object.values(detailPosts)
    /* const sdakkdw = dfoolfd.filter((values) => detailPosts[values].indexOf("h"))  */ 
    console.log(dfoolfd)
    const sadkaskd = dfoolfd.filter(dlld => dlld.slice(70))
    console.log(sadkaskd)
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
