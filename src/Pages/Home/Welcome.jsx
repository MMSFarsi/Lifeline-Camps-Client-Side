import React from 'react';

const Welcome = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6">
      <div className="overflow-hidden">
        <img  src="https://i.ibb.co.com/qF3HvTt9/doctors.jpg"  alt="Medical Team"   className="w-full h-full object-cover  "/>
      </div>

      <div className="text-center md:text-left">
        <h1 className="text-lg text-gray-600  ">
          Welcome to Lifelines Camp
        </h1>
        <p className="text-2xl md:text-3xl text-gray-800 font-bold mt-2">
          Providing top-quality medical care with expert doctors and advanced healthcare solutions.
        </p>

        <h2 className="text-xl font-semibold text-[#B354A6] mt-4"> Dr. Saiful Islam Saif   </h2>
        <p className="text-md text-gray-500">Expert in Surgery & Critical Care</p>
      </div>
    </div>
  );
};

export default Welcome;
