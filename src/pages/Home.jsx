import './Home.scss'
import Posts from '../container/Posts'
import SearchForm from '../components/SearchForm'
import Banner from '../container/Banner'



export default function Home() {

return (
    <>
        <Banner/>
        <div className='posts'>
            <Posts/>
        </div>
            
        
    </>
  )
}
