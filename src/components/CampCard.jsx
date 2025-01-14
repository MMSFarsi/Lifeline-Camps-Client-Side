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
  )
}

export default CampCard