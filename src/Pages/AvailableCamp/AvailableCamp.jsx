import CampCard from '@/components/CampCard'
import useCamp from '@/Hooks/useCamp'
import React from 'react'

const AvailableCamp = () => {
  const [camps]=useCamp()
  return (
    <div>
       <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Avaiable Camp</h2>
        
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