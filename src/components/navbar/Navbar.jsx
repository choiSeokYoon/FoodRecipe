import './Navbar.scss'
import { Link } from 'react-router-dom'
import { BiSearchAlt } from 'react-icons/bi'
import { GrMenu } from 'react-icons/gr'
import { AiFillGithub } from 'react-icons/ai'
import { useRecoilState } from 'recoil'
import { recoilAuthUser } from '../../recoil/user'
import { useState } from 'react'


export default function Navbar() {
  const [authUser, setAuthUser] = useRecoilState(recoilAuthUser);
  const [active, setActive] = useState(false)
  const handleLogout = () => {
    setAuthUser(null);
  };
  
  
  return (
    <div className='navbar'>
      <div className='logo'>
        <h2><Link to="/">한식레시피</Link></h2>
      </div>
      <div className='navbar_btn ' onClick={() => {setActive(!active) }}><GrMenu/></div>
      
        <ul className='nav_menu'>
          <li>
            <Link to="/ranking">다이어트</Link> </li>
          <li><Link to="/posts">레시피</Link> </li>
          <li><Link to="/like">찜목록</Link> </li>
      </ul>
      
      {authUser ? (
        <ul className='nav_end'>
          <li onClick={handleLogout}><Link to="/">Logout</Link></li>
          <li><Link to="/posts"><BiSearchAlt/></Link> </li>
          <li><a href="https://github.com/choiSeokYoon"><AiFillGithub/></a></li>
        </ul>
      ) : (
          <ul className='nav_end'>
            <li><Link to="/login">login</Link> </li>
            <li><Link to="/posts"><BiSearchAlt/></Link> </li>
            <li><a href="https://github.com/choiSeokYoon"><AiFillGithub/></a></li>
        </ul>
      ) }
       {active ? (
        <div className='mobil_menu'>
          <ul className='toggle_menu'>
            <li>
              <Link to="/ranking">다이어트</Link> </li>
            <li><Link to="/posts">레시피</Link> </li>
            <li><Link to="/like">찜목록</Link> </li>
            <li>
            {authUser ? (
          <ul className='toggle_icon'>
            <li onClick={handleLogout}><Link to="/">Logout</Link></li>
            <li><Link to="/posts"><BiSearchAlt/></Link> </li>
            <li><a href="https://github.com/choiSeokYoon"><AiFillGithub/></a></li>
          </ul>
             ) : (
          <ul className='nav_end'>
            <li><Link to="/login">login</Link> </li>
            <li><Link to="/posts"><BiSearchAlt/></Link> </li>
            <li><a href="https://github.com/choiSeokYoon"><AiFillGithub/></a></li>
          </ul>
        ) }
            </li>
          </ul>
          
        
        </div>
        
      ) : <></>
      }
      
    </div>
  )
}


