import React from 'react'
import { Link } from 'react-router-dom'

const CampCard = ({camp}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={camp.image}
                alt={camp.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-base lg:text-xl mb-2 font-semibold text-gray-800">{camp.campName}</h3>
                <p className="text-sm text-gray-500 mb-2">{camp.location}</p>
                <p className="text-sm text-gray-500 mb-2">{camp.dateTime}</p>
                <p className="text-lg text-gray-800 font-bold mb-2">${camp.campFees}</p>
                <p className="text-sm text-gray-500 mb-2">Healthcare Professional: {camp.healthcareProfessionalName}</p>
                <p className="text-sm text-gray-500 mb-4">Participants: {camp.participantCount}</p>

                <Link
          to={`/camp-details/${camp._id}`}
          className="inline-block text-[12px] text-center bg-[#B354A6] text-white px-4 py-2 rounded-md  "
        >
          View Camp Details
        </Link>
              </div>
            </div>
  )
}

export default CampCard