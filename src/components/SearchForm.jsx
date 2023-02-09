
import './SearchForm.scss'

export default function SearchForm({searchKeyword,setSearchKeyword}) {
  return (
    <div className='search_form'>
      <input type="search_input"
        value={searchKeyword} 
        onChange={(e)=>setSearchKeyword(e.target.value)}/>
    </div>
  )
}
