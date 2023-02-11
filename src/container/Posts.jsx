import './Posts.scss'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { foodSearchAtom, recoilLimit,recoilPostsPage, recoilPageCount } from '../recoil/atom'
import { fetchPostData } from '../recoil/selector'
import Paging from '../components/pagination/Paging'
import SearchForm from '../components/SearchForm'




export default function Posts() {
    //데이터
    const [posts,setPosts] =useRecoilState(fetchPostData)
    //검색
    const [searchKeyword, setSearchKeyword] = useRecoilState(foodSearchAtom)
    //페이지네이션 
    const [limit, setLimit] = useRecoilState(recoilLimit)
    const [postsPage, setPostsPerPage] = useRecoilState(recoilPostsPage)
    const offset = (postsPage - 1) * limit;
    
    //검색기능
    const filteredFoods = 
    searchKeyword.length===0 
        ? posts 
        : posts.filter((post)=>post.RCP_NM.includes(searchKeyword))
        
    
  return (
    <div className='post'>
        <SearchForm/>
        <Paging/>
        <label>
            <select
                type="number"
                value={limit}
                onChange={({ target: { value } }) => setLimit(Number(value))}
            >
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
        </label>
        <div className='post_list'>
            {filteredFoods && filteredFoods.slice(offset, offset + limit).map((filteredFood,idx)=>(
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
       
      
    </div>
  )
}
