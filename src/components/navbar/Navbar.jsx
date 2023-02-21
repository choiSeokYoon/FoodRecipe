import './Navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <h2><Link to="/">한식레시피</Link></h2>
      </div>
    </div>
  )
}


