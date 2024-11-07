import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="flex  items-center mx-20 justify-between px-6 sm:px-10 lg:px-20 py-5 my-9">
      <img
      src={logo}
      alt="Logo"
      className="w-24 h-16 cursor-pointer object-contain"
      onClick={() => navigate("/")}
    />
        {/* Desktop Menu */}
        <div className="hidden md:flex mr-20 space-x-9 lg:space-x-9 text-base lg:text-lg text-black">
          <button className="hover:underline whitespace-nowrap" onClick={() => navigate("/aboutus")}>
            About Us
          </button>
          <div className="relative">
            <button className="hover:underline my-1 whitespace-nowrap" onClick={toggleDropdown}>
              Our Services
            </button>
            {showDropdown && (
              <div className="absolute mt-2 bg-white shadow-lg rounded-md p-2 z-10">
                <button
                  className="px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left whitespace-nowrap"
                  onClick={() => navigate("/hire")}
                >
                  Service Hire
                </button>
                <button
                  className="px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left whitespace-nowrap"
                  onClick={() => navigate("/lab")}
                >
                  Service Lab
                </button>
              </div>
            )}
          </div>
          <button className="hover:underline" onClick={() => navigate("/portfolio")}>
            Portfolio
          </button>
          <button className="hover:underline" onClick={() => navigate("/sop")}>SOP's</button>
          <button className="hover:underline" onClick={() => navigate("/careers")}>
            Career
          </button>
          <button className="hover:underline whitespace-nowrap" onClick={() => navigate("/contactus")}>
            Contact Us
          </button>
          <button className="hover:bg-blue-600 border px-2 py-1 text-white rounded-xl bg-blue-500" onClick={() => navigate("/hire")}>
            Appoinment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            {isMobileMenuOpen ? (
              <XIcon className="w-6 h-6 text-black" />
            ) : (
              <MenuIcon className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-6 py-4 bg-white shadow-lg">
          <button className="hover:underline" onClick={() => navigate("/aboutus")}>
            About Us
          </button>
          <button className="hover:underline" onClick={toggleDropdown}>
            Our Services
          </button>
          {showDropdown && (
            <div className="flex flex-col space-y-2 ml-4">
              <button
                className="px-2 py-1 text-gray-800 hover:bg-gray-200 w-full text-left whitespace-nowrap"
                onClick={() => navigate("/hire")}
              >
                Service Hire
              </button>
              <button
                className="px-2 py-1 text-gray-800 hover:bg-gray-200 w-full text-left whitespace-nowrap"
                onClick={() => navigate("/lab")}
              >
                Service Lab
              </button>
            </div>
          )}
          <button className="hover:underline" onClick={() => navigate("/portfolio")}>
            Portfolio
          </button>
          <button className="hover:underline" onClick={() => navigate("/sop")}>SOP's</button>
          <button className="hover:underline" onClick={() => navigate("/careers")}>
            Career
          </button>
          <button className="hover:underline" onClick={() => navigate("/contactus")}>
            Contact Us
          </button>
          <button className="hover:underline" onClick={() => navigate("/appointment")}>
            Appointment
          </button>
        </div>
      )}
    </>
  );
}

export default Header;
