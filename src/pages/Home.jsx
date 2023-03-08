import './Home.scss'
import Posts from './Posts'
import Banner from '../container/Banner'
import Section1 from '../container/Section1'

export default function Home() {
return (
    <>
        <Banner/>
        <div className='main_contents'>

            <Section1/>
        </div>
    </>
  )
}
