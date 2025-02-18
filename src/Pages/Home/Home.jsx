
import Promotion from '@/components/Promotion'
import Banner from './Banner'
import HealthTips from './HealthTips'
import PopularCamps from './PopularCamps'
import Reviews from './Reviews'
import Ads from './Ads'
import Welcome from './Welcome'

const Home = () => {
  return (
    
    <div className='bg-[#FCF8F8]'>
      <Banner></Banner>
      <Ads></Ads>
      <Welcome></Welcome>
      <PopularCamps></PopularCamps>
      <Reviews></Reviews>
      <Promotion></Promotion>
      <HealthTips></HealthTips>
    </div>
  )
}

export default Home