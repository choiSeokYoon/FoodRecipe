import React from 'react'
import { useRecoilState } from 'recoil'
import { recoilUserCart } from '../recoil/atom'
import { recoilAuthUser } from '../recoil/user'
import './WishList.scss'
export default function WishList() {
    const [like, setLike] = useRecoilState(recoilUserCart)
    const [authUser, setAuthUser] = useRecoilState(recoilAuthUser);
    const handleRemove = (idx) => {
        const newLike = like.filter((item, index) => index !== idx)
        setLike(newLike)
      }
  return (
    <div className='wishList'>
        <div className='container'>
        {authUser ? (
        <>
            <div className='title'><h1>찜 목록</h1></div>
            <ul className='like_list'>
                {like.map((item, idx)=>(
                    <li className='like_box'>
                        <div className='num'>{idx}</div>
                        <div className='like_img'>
                            <img src={item.img} alt="내가 찜한 이미지" />
                        </div>
                        <div className='like_name'>
                            <p>{item.name}</p>
                        </div>
                        <div className='like_remove' onClick={() => handleRemove(idx)}>삭제</div>
                    </li>
                ))}
            </ul> 
        </>   
        ):(
            <div className='title'>
                <h1>찜 목록</h1>
                <h2>로그인 해주세요</h2>
            </div>
        )} 
      </div>
    </div>
  )
}
