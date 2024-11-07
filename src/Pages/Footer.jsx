import React from 'react';
import facebook from "../assets/facebook.png";
import instagram from "../assets/twitter.png";
import twitter from "../assets/twitter.png";
import logo from "../assets/logoo.png";  // Logo image
import { useNavigate } from 'react-router-dom';
import Testimonial from "../Components/Testimonial"

function Footer() {
    const navigate = useNavigate();
    return (
        <>
        <div className='w-[1510px]'>
        <Testimonial/>
        <div className="bg-[#3658D3] w-[1510px] text-white  py-10 px-6 md:px-12 lg:px-20">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between items-center">
                
                {/* Left Section: Logo and Tagline */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
                    <img
                        src={logo}
                        alt="Vcode Wonder Logo"
                        className="w-16 h-auto mb-4 cursor-pointer"
                        onClick={() => navigate("/")}
                    />
                    <p className="text-white text-sm md:text-base">
                        "Where creativity meets technology. We build the extraordinary.<br />
                        Unlocking potential through code, that`s our wonder."
                    </p>
                    {/* Social Icons */}
                    <div className="flex items-center mt-4 py-7 space-x-4">
                        <span className="text-white font-semibold text-lg">Follow Us</span>
                        <img src={facebook} alt="Facebook" className="w-6 h-6 cursor-pointer" />
                        <img src={instagram} alt="Instagram" className="w-6 h-6 cursor-pointer" />
                        <img src={twitter} alt="Twitter" className="w-6 h-6 cursor-pointer" />
                    </div>
                </div>

                {/* Middle Section: Quick Links */}
                <div className="text-center md:text-left ">
                    <h1 className="font-semibold text-white text-lg my-3 mb-5">Quick Links</h1>
                    <ul className="space-y-3 text-sm mb-5">
                        <li><button onClick={() => navigate("/aboutus")} className="hover:text-blue-300">About Us</button></li>
                        <li><button onClick={() => navigate("/services")} className="hover:text-blue-300">Our Services</button></li>
                        <li><button onClick={() => navigate("/portfolio")} className="hover:text-blue-300">Portfolio</button></li>
                        <li><button onClick={() => navigate("/sops")} className="hover:text-blue-300">SOP's</button></li>
                        <li><button onClick={() => navigate("/careers")} className="hover:text-blue-300">Career</button></li>
                    </ul>
                </div>

                {/* Right Section: Contact Us */}
                <div className="flex flex-col  items-center space-y-9 ml-  mb-32 md:items-end text-center md:text-left mt-8 md:mt-0">
                    <h1 className="font-semibold text-lg mr-48 mt-11 text-white ">Contact Us</h1>
                    <div className="flex items-center border-2 border-white bg-white rounded-full shadow-lg overflow-hidden max-w-xs w-full">
    {/* Email Input Field */}
    <input
        type="email"
        placeholder="Your Email Address"
        className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-500 focus:outline-none"
    />
    {/* Submit Button */}
    <button className="bg-blue-500 text-white px-4 py-2 font-semibold rounded-full hover:bg-blue-600 transition duration-200">
        Enter
    </button>
</div>

                </div>
            </div>
                <hr className='mx-9'/>
            {/* Bottom Section: Footer Note */}
            <div className="text-white text-left mx-9 flex space-x-9 pt-6  pt-4 text-sm">
                <p>Copyright 2023 </p>
                <p>• 3DPrinter, All Rights Reserved</p>
            </div>
        </div>
        </div>
        </>);
}

export default Footer;
