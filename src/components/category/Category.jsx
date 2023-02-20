import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { fetchPostData } from '../../recoil/selector'
import './Category.scss'

export default function Category({categories , setCategory}) {
  const [active, setActive] = useState(0)

  const handleClick = idx =>{
    setActive(idx)
    setCategory(categories[idx])
  }

  return (
    <ul className='category'>
      {categories.map((categorie, idx)  =>(
        <li key={idx}
          className={idx === active ? 'active' : ''}
          onClick={() => handleClick(idx)}
          >{categorie}
        </li>
      ))}
    </ul>
  )
}
