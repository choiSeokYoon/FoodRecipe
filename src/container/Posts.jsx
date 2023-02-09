import './Posts.scss'
import { Link } from 'react-router-dom'

export default function Posts({handleSearchs}) {
  return (
    <div className='post'>
      {handleSearchs && handleSearchs.map((handleSearch,idx)=>(
        <Link key={idx} to={`/detail/${handleSearch.RCP_NM}`} className="post_item">
          <div className='img_wrap'>
            <img src={handleSearch.ATT_FILE_NO_MAIN} alt="" />
           
          </div>
          <div className='post_text'>
            <p className='post_title'>{handleSearch.RCP_NM}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
