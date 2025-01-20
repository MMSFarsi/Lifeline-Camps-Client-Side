import React from "react";

const About = () => {
  return (
    <section className=" py-16 bg-[#FCF8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  
        <div className="text-center mb-12">
          <h2 className="text-xl lg:text-3xl font-semibold text-center text-[#B354A6] mb-12">
            About Us
          </h2>
          <p className="mt-4 text-gray-600">
            Empowering communities through accessible healthcare camps and
            compassionate service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-blue-500 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
            <p className="mt-4 text-sm text-gray-600">
              To deliver healthcare to underserved communities and improve lives
              through medical camps and awareness programs.
            </p>
          </div>
          <div className="bg-white border-2 border-blue-500 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
            <p className="mt-4 text-sm text-gray-600">
              A healthier world where everyone has access to essential
              healthcare services.
            </p>
          </div>
          <div className="bg-white border-2 border-blue-500 shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800">Our Values</h3>
            <p className="mt-4 text-sm text-gray-600">
              Compassion, integrity, collaboration, and innovation drive us to
              make a difference in every life we touch.
            </p>
          </div>
        </div>

        {/* History */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800">Our Story</h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Lifeline Camps was founded with a singular goal: to bridge the gap
            between quality healthcare and those who need it the most. Since
            inception, we've organized over 50 medical camps, reaching
            thousands of individuals and fostering a culture of health and
            wellness. Whether it's a rural community or an urban area, we
            believe healthcare is a basic human right.
          </p>
        </div>

      
      </div>
    </section>
  );
};



export default About;
