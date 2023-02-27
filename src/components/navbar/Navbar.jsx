import './Navbar.scss'
import { Link } from 'react-router-dom'
import { BiSearchAlt } from 'react-icons/bi'
import { SiKakaotalk } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'


export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <h2><Link to="/">한식레시피</Link></h2>
      </div>
      <ul className='nav_mdl'>
        <li><Link to="/ranking">랭킹보기</Link> </li>
        <li><Link to="/posts">레시피</Link> </li>
      </ul>
      <ul className='nav_end'>
        <li><BiSearchAlt/> </li>
        <li><a href=""></a> <SiKakaotalk/></li>
        <li><a href="https://github.com/choiSeokYoon"><AiFillGithub/></a></li>
      </ul>
      
    </div>
  )
}


