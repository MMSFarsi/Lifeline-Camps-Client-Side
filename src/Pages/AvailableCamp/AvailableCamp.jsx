import CampCard from '@/components/CampCard'
import useCamp from '@/Hooks/useCamp'
import React from 'react'

const AvailableCamp = () => {
  const [camps]=useCamp()
  return (
    <div>
       <div className="py-10 bg-[#FCF8F8] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl lg:text-3xl font-semibold text-center text-[#B354A6] mb-12">Available Camp</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {
            camps.map(camp=> <CampCard key={camp._id} camp={camp}></CampCard>)
          }
        </div>

  
      </div>
    </div>

    </div>
  )
}

export default AvailableCamp