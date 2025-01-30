import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logo from "../images/logo.png";

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <div className="fixed top-0 w-full bg-black text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Olcademy Logo"
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* Links Section */}
        <div className="flex space-x-8 text-lg font-bold">
          <Link
            to="/"
            className="hover:text-blue-400 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="hover:text-blue-400 transition duration-300 ease-in-out"
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="hover:text-blue-400 transition duration-300 ease-in-out"
          >
            Services
          </Link>
          <Link
            to="/careers"
            className="hover:text-blue-400 transition duration-300 ease-in-out"
          >
            Careers
          </Link>
          <Link
            to="/insights"
            className="hover:text-blue-400 transition duration-300 ease-in-out"
          >
            Insights
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-400 transition duration-300 ease-in-out"
          >
            Contact
          </Link>
        </div>

        {/* Search Section */}
        <div
          className="relative flex items-center space-x-2"
          onMouseEnter={() => setSearchActive(true)}
          onMouseLeave={() => setSearchActive(false)}
        >
          <FaSearch className="text-xl cursor-pointer hover:text-blue-400 transition duration-300 ease-in-out" />
          <div
            className={`flex items-center transition-all duration-500 ${
              searchActive ? "w-48" : "w-0"
            } overflow-hidden`}
          >
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-b border-gray-400 focus:outline-none text-white placeholder-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
