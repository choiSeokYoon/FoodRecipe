import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { recoilUserCart } from "../recoil/atom";
import { recoilAuthUser } from "../recoil/user";
import "./WishList.scss";
export default function WishList() {
  const [like, setLike] = useRecoilState(recoilUserCart);
  const [authUser, setAuthUser] = useRecoilState(recoilAuthUser);
  const handleRemove = (idx:number) => {
    const newLike = like.filter((item, index) => index !== idx);
    setLike(newLike);
  };
  return (
    <div className="wishList">
      <div className="container">
        {authUser ? (
          <>
            <div className="title">
              <h1>
                <span>{authUser.name}</span> 님의
                <br />
                레시피목록
              </h1>
            </div>
            {like.length === 0 ? (
              <div className="empty">
                찜 목록이 비어 있습니다.
                <br />
                레시피 페이지에서 하트를 눌러주세요
              </div>
            ) : (
              <ul className="like_list">
                {like.map((item, idx) => (
                  <li className="like_box" key={idx}>
                    <div className="num">{idx}</div>
                    <div className="like_img">
                      <img src={item.img} alt="내가 찜한 이미지" />
                    </div>
                    <div className="like_name">
                      <p>{item.name}</p>
                    </div>
                    <Link to={`/detail/${item.name}`} className="like_detail">
                      <p>보기</p>
                    </Link>
                    <div
                      className="like_remove"
                      onClick={() => handleRemove(idx)}
                    >
                      삭제
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <div className="title">
            <h1>찜 목록</h1>
            <h2>로그인 해주세요</h2>
          </div>
        )}
      </div>
    </div>
  );
}
