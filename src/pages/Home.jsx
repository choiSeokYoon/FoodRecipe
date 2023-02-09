import './Home.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Posts from '../container/Posts'
import SearchForm from '../components/SearchForm'


export default function Home() {
  const [postItems, setPostItem] = useState([])
  const [searchKeyword, setSearchKeyword] = useState("")

  const handleSearchs = searchKeyword.length===0 ? postItems : postItems.filter((postItems)=>postItems.RCP_NM.includes(searchKeyword))
 
 
  useEffect(()=>{
    axios.get(`https://openapi.foodsafetykorea.go.kr/api/22c0222d1bb745cebfb9/COOKRCP01/json/1/100`)
    .then((res)=>{
      setPostItem(res.data.COOKRCP01.row)
      
    })
    .catch((err)=>{
      console.log(err)
    })
    
  },[])
 
  
  
  return (
    <div className='home'>
      <div className='container'>
        <div className='search'>
          <SearchForm searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword}/>
        </div>
        <div className='posts'>
          <Posts handleSearchs={handleSearchs}/>
        </div>
        
      </div>
        
    </div>
  )
}
