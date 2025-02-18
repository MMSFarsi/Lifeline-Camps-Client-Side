import React from 'react';

const doctors = [
  {
    name: "Dr. Saiful Islam Saif",
    specialty: "Cardiologist",
    image: "https://i.ibb.co.com/rGQkqNDs/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-cro.jpg",
  },
  {
    name: "Dr. Ayesha Rahman",
    specialty: "Neurologist",
    image: "https://i.ibb.co.com/Nn7H5ND3/360-F-504257032-j-Btwq-Ndvd-MN9-Xm6a-DT0hcvtx-DXPZErrn.jpg",
  },
  {
    name: "Dr. Tanvir Hossain",
    specialty: "Orthopedic Surgeon",
    image: "https://i.ibb.co.com/cKhZ5zKZ/portrait-hansome-young-male-doctor-man-171337-5068.jpg",
  },
  {
    name: "Dr. Farhana Akter",
    specialty: "Pediatrician",
    image: "https://i.ibb.co.com/yFVHWJrf/2a0e8cb609405d9ca87bc81154b9c443.jpg",
  }
];

const OurDoctors = () => {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl lg:text-3xl font-semibold text-center text-[#B354A6] mb-12">Meet Our Doctors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {doctors.map((doctor, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-all duration-300">
            <img  src={doctor.image}  alt={doctor.name}  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-gray-200"   />
            <h3 className="text-xl font-semibold text-gray-700">{doctor.name}</h3>
            <p className="text-gray-500">{doctor.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurDoctors;
