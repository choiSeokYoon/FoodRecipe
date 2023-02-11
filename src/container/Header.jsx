import './Header.scss'
import Navbar from '../components/navbar/Navbar'

export default function Header() {
  return (
    <div id='header'>
      <div className='container'>
        <Navbar/>
      </div>
    </div>
  )
}
