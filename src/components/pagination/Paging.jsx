
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { recoilPostsPage,recoilLimit } from '../../recoil/atom'
import {  recoilTotalPosts} from '../../recoil/selector'
import './Paging.scss'



export default function Paging() {
    

    const [limit, setLimit] = useRecoilState(recoilLimit)
    const [postsPage, setPostsPage] = useRecoilState(recoilPostsPage)
    const [ totalPosts , setTotalPosts] = useRecoilState(recoilTotalPosts)
    const numPages = Math.ceil(totalPosts / limit); //페이지 숫자
    const [active, setActive] = useState(false)
    
    return (
        <div className='pagination'>
            <button className='pagination_btn_prev' onClick={() => setPostsPage(postsPage - 1)} disabled={postsPage ===1}>a</button>
            {Array(numPages).fill().map((_, idx)=>(
                <button key={idx + 1} className={postsPage === idx + 1  ? "pagination_btn active" : "pagination_btn"} 
                    onClick={()=> setPostsPage(idx + 1)} aria-current={postsPage === idx + 1 
                    ? "postsPage" : null}>{idx + 1}</button>
            ))}
            <button className='pagination_btn_next' onClick={()=> setPostsPage(postsPage + 1)} disabled={postsPage === numPages}>b</button>
        </div>
        
            
        
    )
}
