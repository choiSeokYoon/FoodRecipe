import './Posts.scss'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { foodSearchAtom, recoilLimit,recoilPostsPage } from '../recoil/atom'
import { fetchPostData } from '../recoil/selector'
import Paging from '../components/pagination/Paging'
import SearchForm from '../components/searchForm/SearchForm'
import Category from '../components/category/Category'
import { useState } from 'react'

export default function Posts() {
    //데이터
    const posts = useRecoilValue(fetchPostData)
    //검색
    const searchKeyword= useRecoilValue(foodSearchAtom)
    //페이지네이션 
    const limit = useRecoilValue(recoilLimit)
    const postsPage= useRecoilValue(recoilPostsPage)
    const offset = (postsPage - 1) * limit;
    //카테고리
    const [category , setCategory] = useState("전체");
    const categories = ["전체", ...new Set(posts.map(item => item.RCP_PAT2))]
    
    //검색기능
    const filteredFoods = 
    searchKeyword.length===0 
        ? posts 
        : posts.filter((post)=>post.RCP_NM.includes(searchKeyword))
    //카테고리
    const filteredData =
    category ==="전체"
        ? filteredFoods
        : filteredFoods.filter(item => item.RCP_PAT2 === category)
        console.log(typeof posts)
        
  return (
    posts && (
        <div className='post'>
        <div className='container'>
            <div className='title'><h1>레시피</h1></div>
            <Category categories={categories} setCategory={setCategory}/>
            <SearchForm/>
            <div className='post_list'>
                {filteredData && filteredData.slice(offset, offset + limit).map((filteredFood,idx)=>(
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
            <Paging filteredData={filteredData}/>
        </div>
    </div>
    )
  )
}
