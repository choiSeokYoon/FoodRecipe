import React, { useState } from "react";
import "./UserLike.scss";
import { useRecoilState } from "recoil";
import { recoilUserCart } from "../../recoil/atom";
import { recoilAuthUser } from "../../recoil/user";



const Like = require("../../assets/heart2.png");
const unLike = require("../../assets/heart1.png");
interface IFoodProps {
  RCP_NM: string;
  ATT_FILE_NO_MAIN: string;
}

export default function UserLike({ food }: { food: IFoodProps })  {
  const [like, setLike] = useRecoilState(recoilUserCart);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [authUser, setAuthUser] = useRecoilState(recoilAuthUser);

  const handleCart = () => {
    const userItem = {
      name: food.RCP_NM,
      img: food.ATT_FILE_NO_MAIN,
    };
    // 카트에 이미 같은 아이템이 있으면 삭제
    const newLike = like.filter((item) => item.name !== userItem.name);
    if (newLike.length === like.length) {
      // 카트에 같은 아이템이 없으면 추가
      newLike.push(userItem);
    }
    setLike(newLike);
    setIsClicked(!isClicked);
  };
  return (
    authUser && (
      <div className="like">
        <div onClick={handleCart}>
          <img
            src={like.find((item) => item.name === food.RCP_NM) ? Like : unLike}
            alt=""
          />
        </div>
      </div>
    )
  );
}
