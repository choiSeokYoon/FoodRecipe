import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { recoilDetailData } from '../../recoil/atom'
import './DetailImg.scss'

export default function DetailImg() {
  const [detailPosts, setDetailPosts] = useRecoilState(recoilDetailData)
  const [selectedImageUrl, setSelectedImageUrl] = useState(detailPosts.ATT_FILE_NO_MK)
  const [active, setActive] = useState(0)

  useEffect(() => {
    // 객체로 된 이미지데이터를 반복해서 쓰기위해 밸류값만 따로 빼냄
    const detailManualImg = Object.keys(detailPosts)
      .filter(key => key.includes('MANUAL_IMG') && detailPosts[key] !== '')
      .map(key => detailPosts[key])
      .sort()

    detailManualImg.unshift(detailPosts.ATT_FILE_NO_MK) // 메인 이미지도 detailManualImg안에 넣어줌

    // 상태값 업데이트
    setDetailManualImg(detailManualImg)
    setSelectedImageUrl(detailPosts.ATT_FILE_NO_MK)
    setActive(0)
  }, [detailPosts])

  const [detailManualImg, setDetailManualImg] = useState([])

  const handleClick = idx => {
    setActive(idx)
    setSelectedImageUrl(detailManualImg[idx])
  }

  return (
    <div className="detail_item_left">
      <div className="detail_main_img">
        <img src={selectedImageUrl} alt="" />
        {/* <img src={detailPostsMANUAL_IMG01} alt="" /> */}
      </div>

      <div className="sub_img">
        {detailManualImg.map((detailManualImgs, idx) => (
          <img
            key={idx}
            src={detailManualImgs}
            alt="만드는과정이미지"
            className={idx === active ? 'active' : ''}
            onClick={() => handleClick(idx)}
          />
        ))}
      </div>
    </div>
  )
}
/* sadczxczx */