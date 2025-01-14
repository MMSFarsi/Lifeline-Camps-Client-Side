import useCamp from '@/Hooks/useCamp';
import { useParams } from 'react-router-dom';

const CampDetails = () => {
  const { id } = useParams(); 
  const [camps] = useCamp();  


  const camp = camps.find(camp => camp._id === id);

  if (!camp) {
    return <div>Camp not found</div>;  
  }

  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">{camp.campName}</h2>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={camp.image}
            alt={camp.campName}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">{camp.location}</p>
            <p className="text-sm text-gray-500 mb-2">{new Date(camp.dateTime).toLocaleString()}</p>
            <p className="text-lg text-gray-800 font-bold mb-2">${camp.campFees}</p>
            <p className="text-sm text-gray-500 mb-2">Healthcare Professional: {camp.healthcareProfessionalName}</p>
            <p className="text-sm text-gray-500 mb-2">Participants: {camp.participantCount}</p>
            <p className="text-sm text-gray-600 mb-4">{camp.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampDetails;
