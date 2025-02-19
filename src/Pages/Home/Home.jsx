
import Promotion from '@/components/Promotion'
import Banner from './Banner'
import HealthTips from './HealthTips'
import PopularCamps from './PopularCamps'
import Reviews from './Reviews'
import Ads from './Ads'
import Welcome from './Welcome'
import OurDoctors from './OurDoctors'
import Newsletter from './Newsletter'

const Home = () => {
  return (
    
    <div className='bg-[#FCF8F8]'>
      <Banner></Banner>
      <Ads></Ads>
      <Welcome></Welcome>
      <PopularCamps></PopularCamps>
      <OurDoctors></OurDoctors>
      <Reviews></Reviews>
      <Promotion></Promotion>
      <HealthTips></HealthTips>
      <Newsletter></Newsletter>
    </div>
  )
}

export default Home