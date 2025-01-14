import React from 'react';
import useCamp from '@/Hooks/useCamp';
import { Link } from 'react-router-dom';

const PopularCamps = () => {
  const [camps] = useCamp();
  const sortedCamps = camps.sort((a, b) => b.participantCount - a.participantCount);
  const popular = sortedCamps.slice(0, 6);

  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Popular Medical Camps</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {popular.map((camp, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={camp.image}
                alt={camp.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{camp.campName}</h3>
                <p className="text-sm text-gray-500 mb-2">{camp.location}</p>
                <p className="text-sm text-gray-500 mb-2">{camp.dateTime}</p>
                <p className="text-lg text-gray-800 font-bold mb-2">${camp.campFees}</p>
                <p className="text-sm text-gray-500 mb-2">Healthcare Professional: {camp.healthcareProfessionalName}</p>
                <p className="text-sm text-gray-500 mb-4">Participants: {camp.participantCount}</p>

                <Link to={`/camp-details/${camp._id}`} className="text-blue-600 hover:underline text-sm">
                  View Camp Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/available-camps"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            See All Camps
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularCamps;
