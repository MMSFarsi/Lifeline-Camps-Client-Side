import React from 'react';

const HealthTips = () => {
  const tips = [
    "Stay hydrated by drinking at least 8 glasses of water daily.",
    "Get at least 7-8 hours of quality sleep every night.",
    "Incorporate at least 30 minutes of physical activity into your daily routine.",
    "Maintain a balanced diet with plenty of fruits and vegetables.",
    "Wash your hands regularly to avoid infections.",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-xl lg:text-3xl font-semibold text-center text-[#B354A6] mb-12">
        Health Tips for a Better Life
      </h2>
      <ul className="space-y-4">
        {tips.map((tip, index) => (
          <li
            key={index}
            className="bg-blue-50 p-4 rounded-lg shadow-md text-gray-700 flex items-start"
          >
            <span className="text-blue-600 font-bold mr-3">{index + 1}.</span>
            <p>{tip}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthTips;
