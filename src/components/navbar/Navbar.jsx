import SearchForm from '../SearchForm'
import './Navbar.scss'
import logoImg from '../../assets/h_logo.jpg'


export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <h2><img src={logoImg} alt=""/></h2>
      </div>
    </div>
  )
}
