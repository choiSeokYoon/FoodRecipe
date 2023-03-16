import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { recoilDetailData } from "../../recoil/atom";
import "./DetailImg.scss";

export default function DetailImg() {
  const detailPosts = useRecoilValue(recoilDetailData);
  const [selectedImageUrl, setSelectedImageUrl] = useState(
    detailPosts.ATT_FILE_NO_MK || ""
  );
  const [detailManualImg, setDetailManualImg] = useState<string[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // 객체로 된 이미지데이터를 반복해서 쓰기위해 밸류값만 따로 빼냄
    const detailManualImg = Object.keys(detailPosts)
      .filter((key) => key.includes("MANUAL_IMG") && detailPosts[key] !== "")
      .map((key) => String(detailPosts[key]))// 값의 타입을 string으로 변경
      .sort();

    detailManualImg.unshift(detailPosts.ATT_FILE_NO_MK); // 메인 이미지도 detailManualImg안에 넣어줌

    // 상태값 업데이트
    setDetailManualImg(detailManualImg);
    setSelectedImageUrl(detailPosts.ATT_FILE_NO_MK || "");
    setActive(0);
  }, [detailPosts]);

  const handleClick = (idx: number) => {
    setActive(idx);
    setSelectedImageUrl(detailManualImg[idx]);
  };

  return (
    <div className="detail_item_left">
      <div className="detail_main_img">
        <img src={selectedImageUrl} alt="이미지" />
      </div>

      <div className="sub_img">
        {detailManualImg.map((detailManualImgs, idx) => (
          <img
            key={idx}
            src={detailManualImgs}
            alt="만드는과정이미지"
            className={idx === active ? "active" : ""}
            onClick={() => handleClick(idx)}
          />
        ))}
      </div>
    </div>
  );
}
