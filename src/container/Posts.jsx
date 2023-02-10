import './Posts.scss'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { foodAtom } from '../recoil/atom'
import { fetchPostData } from '../recoil/selector'
import { useMemo } from 'react'

export default function Posts() {

    const [posts,setPosts] =useRecoilState(fetchPostData)
    const [searchKeyword, setSearchKeyword] = useRecoilState(foodAtom)
    console.log(posts)

    //검색기능
    const filteredFoods = 
    searchKeyword.length===0 
        ? posts 
        : posts.filter((post)=>post.RCP_NM.includes(searchKeyword))
        
    
  return (
    <div className='post'>
      {filteredFoods && filteredFoods.map((filteredFood,idx)=>(
        <Link key={idx} to={`/detail/${filteredFood.RCP_NM}`} className="post_item">
          <div className='img_wrap'>
            <img src={filteredFood.ATT_FILE_NO_MAIN} alt="" />
           
          </div>
          <div className='post_text'>
            <p className='post_title'>{filteredFood.RCP_NM}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
