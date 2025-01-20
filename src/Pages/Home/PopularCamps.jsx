import React from 'react';
import useCamp from '@/Hooks/useCamp';
import { Link } from 'react-router-dom';
import CampCard from '@/components/CampCard';

const PopularCamps = () => {
  const [camps] = useCamp();
  const sortedCamps = camps.sort((a, b) => b.participantCount - a.participantCount);
  const popular = sortedCamps.slice(0, 6);

  return (
    <div className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl lg:text-3xl font-semibold text-center text-[#B354A6] mb-12">Popular Medical Camps</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {
            popular.map(camp=> <CampCard key={camp._id} camp={camp}></CampCard>)
          }
        </div>

        <div className="text-center mt-8">
          <Link
            to="/available-camps"
            className="px-6 py-2 bg-[#B354A6] text-white font-semibold rounded-lg "
          >
            See All Camps
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularCamps;
