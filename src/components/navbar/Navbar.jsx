import './Navbar.scss'
import { Link } from 'react-router-dom'
import { BiSearchAlt } from 'react-icons/bi'
import { SiKakaotalk } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'
import { useRecoilState } from 'recoil'
import { recoilAuthUser } from '../../recoil/user'
import { useState } from 'react'


export default function Navbar() {
  const [authUser, setAuthUser] = useRecoilState(recoilAuthUser);
  const [active, setActive] = useState("")
  const handleLogout = () => {
    setAuthUser(null);
  };
  const handleClick = () =>{
    setActive()
  } 
  
  return (
    <div className='navbar'>
      <div className='logo'>
        <h2><Link to="/">한식레시피</Link></h2>
      </div>
      <ul className='nav_mdl'>
        <li className={ active ? "active" : ""} onClick={()=>handleClick()}>
          <Link to="/ranking">다이어트</Link> </li>
        <li><Link to="/posts">레시피</Link> </li>
        <li><Link to="/like">찜목록</Link> </li>
      </ul>
      {authUser ? (
        <ul className='nav_end'>
          <li onClick={handleLogout}><Link to="/">Logout</Link></li>
          <li><Link to="/posts"><BiSearchAlt/></Link> </li>
          <li><a href=""></a> <SiKakaotalk/></li>
          <li><a href="https://github.com/choiSeokYoon"><AiFillGithub/></a></li>
        </ul>
      ) : (
          <ul className='nav_end'>
            <li><Link to="/login">login</Link> </li>
            <li><Link to="/posts"><BiSearchAlt/></Link> </li>
            <li><a href=""></a> <SiKakaotalk/></li>
            <li><a href="https://github.com/choiSeokYoon"><AiFillGithub/></a></li>
        </ul>
      ) }
      
      
    </div>
  )
}


