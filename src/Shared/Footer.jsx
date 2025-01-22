import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <h3 className="text-lg font-bold text-white">Lifeline Camps</h3>
            <p className="text-sm text-gray-400">
              Bridging the gap in healthcare with compassion and care.
            </p>
          </div>
          <nav className="flex space-x-6">
            <Link to="/" className="text-gray-400 hover:text-white text-sm">
              Home
            </Link>
           
            <Link
              to="/available-camps"
              className="text-gray-400 hover:text-white text-sm"
            >
            Available  Camps
            </Link>
            <Link to="/aboutUs" className="text-gray-400 hover:text-white text-sm">
              About Us
            </Link>
         
          </nav>
        </div>

      
        <hr className="my-4 border-gray-700" />


        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Lifeline Camps. All rights
            reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="Facebook"
            >
            <img width="20" height="20" src="https://img.icons8.com/fluency/50/facebook-new.png" alt="facebook-new"/>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="Twitter"
            >
            <img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/twitterx.png" alt="twitterx"/>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="Instagram"
            >
        <img width="20" height="20" src="https://img.icons8.com/fluency/50/instagram-new.png" alt="instagram-new"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
