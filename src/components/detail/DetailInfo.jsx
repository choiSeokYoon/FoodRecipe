
import { useState } from 'react'
import {  useRecoilValue } from 'recoil'
import { recoilDetailData } from '../../recoil/atom'
import './DetailInfo.scss'


export default function DetailInfo() {
    const detailPosts = useRecoilValue(recoilDetailData)
    const [teb , setTeb] = useState(1) 
     //메뉴얼객체에서 밸류 값들만 꺼냄
    const detailManual = Object.keys(detailPosts)
    .filter(key => key.includes('MANUAL') && !key.includes('MANUAL_IMG') && detailPosts[key] !== '')
    .map(key => detailPosts[key]).sort() 
    
  return (
    <div className="detail_item_right">
        <div className='detail_name'>
            <h2>{detailPosts.RCP_NM}</h2>
        </div>
        <div className='tab'>
            <button onClick={()=>{setTeb(1)}}
                className={teb === 1 ? "tab_btn": ""}>MANUAL</button>
            <button onClick={()=>{setTeb(2)}}
                className={teb === 2 ? "tab_btn": ""}>ETC</button>
        </div>
        <div className='ingredients'>
          <p>{detailPosts.RCP_PARTS_DTLS}</p>  
        </div>
        <ul className='detail_cook'>
            {teb === 1 && detailManual.map((filteredArrs , idx)=>(
                <li key={idx}>{filteredArrs}</li>
            ))}
        </ul>
        <div className='detail_etc'>
        {teb === 2 && 
            <ul>
                <li>열량 : {detailPosts.INFO_ENG}</li>
                <li>탄수화물 : {detailPosts.INFO_CAR}</li>
                <li>단백질 : {detailPosts.INFO_PRO}</li>
                <li>지방 : {detailPosts.INFO_FAT}</li>
                <li>나트륨 : {detailPosts.INFO_NA}</li>
            </ul>
            }
        </div>
    </div>
  )
}
