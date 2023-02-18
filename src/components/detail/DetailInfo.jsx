
import { useRecoilState } from 'recoil'
import { recoilDetailData } from '../../recoil/atom'


export default function DetailInfo() {
    const [detailPosts, setDetailPosts] = useRecoilState(recoilDetailData)
    
     //메뉴얼객체에서 밸류 값들만 꺼냄
    const detailManual = Object.keys(detailPosts)
    .filter(key => key.includes('MANUAL') && !key.includes('MANUAL_IMG') && detailPosts[key] !== '')
    .map(key => detailPosts[key]).sort() 
    

   
   
  return (
    <div className="detail_item_right">
        <div className='detail_name'>
            <h2>{detailPosts.RCP_NM}</h2>
        </div>
        <ul className='detail_cook'>
            {detailManual.map((filteredArrs , idx)=>(
                <li key={idx}>{filteredArrs}</li>
            ))}
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
