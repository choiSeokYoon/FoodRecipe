import './Header.scss'
import Navbar from '../components/navbar/Navbar'

export default function Header({postItems,setPostItem,searchKeyword,setSearchKeyword}) {
  return (
    <div id='header'>
      <div className='container'>
        <Navbar
          postItems={postItems} 
          setPostItem={setPostItem}
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
        />
      </div>
    </div>
  )
}
