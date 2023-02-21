import './Home.scss'
import Posts from '../container/Posts'
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
            <section className='section_2'>
                <Posts/>
            </section>
        </div>
    </>
  )
}
