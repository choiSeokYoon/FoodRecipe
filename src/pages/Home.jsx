import './Home.scss'
import Posts from '../container/Posts'
import SearchForm from '../components/SearchForm'



export default function Home() {

return (
    <div className='home'>
        <div className='container'>
            <div className='search'>
                <SearchForm/>
            </div>
            <div className='posts'>
                <Posts/>
            </div>
        </div>
    </div>
  )
}
