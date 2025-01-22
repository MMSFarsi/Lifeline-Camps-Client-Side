import CampCard from '@/components/CampCard';
import useCamp from '@/Hooks/useCamp';
import React, { useState } from 'react';

const AvailableCamp = () => {
  const [camps] = useCamp();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('mostRegistered');
  const [isTwoColumnLayout, setIsTwoColumnLayout] = useState(false);
  const filteredCamps = camps.filter((camp) => {
    const searchKeyword = searchTerm.toLowerCase();
    return (
      camp.campName.toLowerCase().includes(searchKeyword) ||
      camp.location.toLowerCase().includes(searchKeyword) ||
      new Date(camp.dateTime).toLocaleDateString().includes(searchKeyword)
    );
  });


  const sortedCamps = filteredCamps.sort((a, b) => {
    if (sortOption === 'mostRegistered') {
      return b.participantCount - a.participantCount;
    } else if (sortOption === 'campFees') {
      return a.campFees - b.campFees;
    } else if (sortOption === 'alphabetical') {
      return a.campName.localeCompare(b.campName);
    }
    return 0;
  });

  const toggleLayout = () => {
    setIsTwoColumnLayout((prev) => !prev);
  };

  return (
    <div className="py-10 bg-[#FCF8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl lg:text-3xl font-semibold text-center text-[#B354A6] mb-12">
          Available Camp
        </h2>

        <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Search camps by name, location, or date"
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="mostRegistered">Most Registered</option>
            <option value="campFees">Camp Fees</option>
            <option value="alphabetical">Alphabetical Order</option>
          </select>

          <button  onClick={toggleLayout} className="px-4 py-2 hidden lg:block bg-[#B354A6] text-white font-semibold rounded-lg">
            {isTwoColumnLayout ? 'Switch to 3 Columns' : 'Switch to 2 Columns'}
          </button>
        </div>
        <div
          className={`grid ${
            isTwoColumnLayout
              ? 'grid-cols-1 sm:grid-cols-2'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          } gap-8`}
        >
          {sortedCamps.map((camp) => (
            <CampCard key={camp._id} camp={camp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableCamp;
