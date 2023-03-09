import './Home.scss'
import Posts from './Posts'
import Banner from '../container/Banner'
import Section1 from '../container/Section1'
import Section2 from '../container/Section2'
import Section3 from '../container/Section3'
import { recoilAuthUser } from '../recoil/user'
import { useRecoilState } from 'recoil'

export default function Home() {
    const [authUser, setAuthUser] = useRecoilState(recoilAuthUser);
    console.log(authUser)
return (
    <>
        
        <div className='main_contents'>
            <Section1/>
            <Section2/>
            <Section3/>
        </div>
        <Banner/>
    </>
  )
}
