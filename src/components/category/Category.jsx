import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { fetchPostData } from '../../recoil/selector'
import './Category.scss'

export default function Category({categories , setCategory}) {

  

  return (
    <div>
      {categories.map((categorie, idx)  =>(
        <button key={idx} onClick={() => setCategory(categorie)}>
          {categorie}
        </button>
      ))}
    </div>
  )
}
