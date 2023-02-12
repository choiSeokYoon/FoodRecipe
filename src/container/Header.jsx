import './Header.scss'
import Navbar from '../components/navbar/Navbar'
import { useEffect, useState } from 'react'

export default function Header() {
    const [scroll, setScroll] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll" , ()=>{
            setScroll(window.scrollY > 20)
        })
    })
  return (
    <div className={scroll ? "header active" : "header"}>
      <div className='container'>
        <Navbar/>
      </div>
    </div>
  )
}
