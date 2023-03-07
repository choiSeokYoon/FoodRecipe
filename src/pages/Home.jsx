import './Home.scss'
import Posts from './Posts'
import Banner from '../container/Banner'
import RandomPosts from '../container/RandomPosts'

export default function Home() {
return (
    <>
        <Banner/>
        <div className='main_contents'>
            <section className='section_1'>
                <RandomPosts/>
            </section>
            
        </div>
    </>
  )
}
