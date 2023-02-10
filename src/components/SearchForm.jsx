
import './SearchForm.scss'
import { useRecoilState } from 'recoil'
import { foodAtom } from '../recoil/atom'



export default function SearchForm() {
  const [searchKeyword, setSearchKeyword] = useRecoilState(foodAtom)
  
  return (
    <div className='search_form'>
      <input type="search_input"
        value={searchKeyword} 
        onChange={(e)=>setSearchKeyword(e.target.value)}/>
    </div>
  )
}
