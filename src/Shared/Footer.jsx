import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
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
            <Link to="/about" className="text-gray-400 hover:text-white text-sm">
              About Us
            </Link>
            <Link
              to="/available-camps"
              className="text-gray-400 hover:text-white text-sm"
            >
              Camps
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white text-sm">
              Contact
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <hr className="my-4 border-gray-700" />

        {/* Bottom Section */}
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
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
