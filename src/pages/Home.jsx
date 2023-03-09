import './Home.scss'
import Posts from './Posts'
import Banner from '../container/Banner'
import Section1 from '../container/Section1'
import Section2 from '../container/Section2'

export default function Home() {
return (
    <>
        <Banner/>
        <div className='main_contents'>
            <Section1/>
            <Section2/>
        </div>
    </>
  )
}
