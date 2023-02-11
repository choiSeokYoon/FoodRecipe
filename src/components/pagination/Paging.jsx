
import { useRecoilState } from 'recoil';
import { recoilPostsPage,recoilLimit } from '../../recoil/atom'
import {  recoilTotalPosts} from '../../recoil/selector'



export default function Paging() {
    

    const [limit, setLimit] = useRecoilState(recoilLimit)
    const [postsPage, setPostsPage] = useRecoilState(recoilPostsPage)
    const [ totalPosts , setTotalPosts] = useRecoilState(recoilTotalPosts)
    const numPages = Math.ceil(totalPosts / limit); //페이지 숫자
    
    return (
        <div className='pagination'>
            <button onClick={() => setPostsPage(postsPage - 1)} disabled={postsPage ===1}></button>
            {Array(numPages).fill().map((_, idx)=>(
                <button key={idx + 1} onClick={()=> setPostsPage(idx + 1)} aria-current={postsPage === idx + 1 
                    ? "postsPage" : null}>{idx + 1}</button>
            ))}
            <button onClick={()=> setPostsPage(postsPage + 1)} disabled={postsPage === numPages}></button>
        </div>
        
            
        
    )
}
