
import './SearchForm.scss'
import { useRecoilState } from 'recoil'
import { foodSearchAtom } from '../recoil/atom'



export default function SearchForm() {
  const [searchKeyword, setSearchKeyword] = useRecoilState(foodSearchAtom)
  
  return (
    <div className='search_form'>
      <input type="search_input"
        value={searchKeyword} 
        onChange={(e)=>setSearchKeyword(e.target.value)}/>
    </div>
  )
}
