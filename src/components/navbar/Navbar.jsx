
import './Navbar.scss'
import logoImg from '../../assets/h_logo.jpg'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className='navbar'>
        
      <div className='logo'>
        <h2><Link to="/">오늘의 한식레시피</Link></h2>
      </div>
      {/* <ul className='menu'>
        <li><a href="">전체</a></li>
        <li><a href="">밥</a></li>
        <li><a href="">반찬</a></li>
        <li><a href="">국</a></li>
        <li><a href="">일품</a></li>
        
      </ul> */}
    </div>
  )
}


