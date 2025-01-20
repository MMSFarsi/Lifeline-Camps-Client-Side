
import Banner from './Banner'
import HealthTips from './HealthTips'
import PopularCamps from './PopularCamps'
import Reviews from './Reviews'

const Home = () => {
  return (
    
    <div className='bg-[#FCF8F8]'>
      <Banner></Banner>
      <PopularCamps></PopularCamps>
      <Reviews></Reviews>
      <HealthTips></HealthTips>
    </div>
  )
}

export default Home