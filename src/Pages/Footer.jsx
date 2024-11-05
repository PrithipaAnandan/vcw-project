import React from 'react';
import facebook from "../assets/facebook.png";
import whatsapp from "../assets/whatsapp.png";
import twitter from "../assets/twitter.png";
import connection from "../assets/connection.png";
import Testmonial from "../Components/Testimonial";
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    return (
        <>
            <Testmonial />
            <div className="bg-blue-500 w-full mt-9 px-4 md:px-10 lg:px-20">
                <div className="max-w-screen-xl mx-auto flex flex-col items-center md:flex-row md:justify-between">
                    {/* Logo and Slogan Section */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
                        <img
                            src="https://www.vcodewonders.com/wp-content/uploads/2023/11/logo1.png"
                            alt="Vcode Wonder Logo"
                            className="w-40 h-16 mb-4 cursor-pointer" onClick={() => navigate("/")}
                        />
                        <p className="text-white text-base whitespace-nowrap md:text-lg">
                            "Where creativity meets technology, we build the extraordinary,<br />
                            Unlocking potential through code, that's our wonder."
                        </p>
                    </div>

                    {/* Navigation Links Section */}
                    <div className="text-white grid grid-cols-2 sm:grid-cols-3 gap-5  text-base md:text-lg mt-10 md:mt-0">
                        {/* Company Section */}
                        <div>
                            <h1 className="font-bold mb-2 text-lg text-black mr-28 my-4">Company</h1>
                            <ul className="space-y-1 px-8">
                                <li><button className="text-left hover:text-blue-800 focus:outline-none" onClick={() => navigate("/aboutus")}>About</button></li>
                                <li><button className="text-left hover:text-blue-800 focus:outline-none" onClick={() => navigate("/hire")}>Service</button></li>
                                <li><button className="text-left hover:text-blue-800 focus:outline-none" onClick={() => navigate("/portfolio")}>Portfolio</button></li>
                                <li><button className="text-left hover:text-blue-800 focus:outline-none" onClick={() => navigate("/sop")}>SOP's</button></li>
                                <li><button className="text-left hover:text-blue-800 focus:outline-none" onClick={() => navigate("/careers")}>Career</button></li>
                                <li><button className="text-left hover:text-blue-800 focus:outline-none" onClick={() => navigate("/contactus")}>Contact Us</button></li>
                            </ul>
                        </div>

                        {/* Social Events and Contact Info */}
                     <div className="flex flex-col mb-32 md:flex-row justify-between items-center text-white space-y-6 md:space-y-0 md:space-x-10">
                    {/* Social Events Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <h1 className="text-xl font-bold mb-2 text-black">Social Events</h1>
                        <div className="flex space-x-4">
                            <img src={facebook} alt="Facebook" className="w-8 h-8" />
                            <img src={twitter} alt="Twitter" className="w-8 h-8" />
                            <img src={connection} alt="Connection" className="w-8 h-8" />
                            <img src={whatsapp} alt="WhatsApp" className="w-8 h-8" />
                        </div>
                    </div>
                    </div>


                    {/* Contact Info Section */}
                    <div className="text-center md:text-left px-9">
                        <h1 className="text-xl font-bold mb-2 text-black whitespace-nowrap mr-16 my-4">Contact Us</h1>
                        <p className="whitespace-nowrap">171/3, Omshakthi Avenue,<br />Puducherry - 605008</p>
                        <p>+91 7092863695</p>
                        <a href="mailto:dk@vcodewonders.com" className="underline hover:text-blue-300 text-black">dk@vcodewonders.com</a>
                    </div>
                    </div>
                </div>

                <hr className="my-6 border-white/30" />

                <div className="text-white text-left flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-14 items-start sm:items-center">
                    <h1 className="text-white">String System 2024</h1>
                    <h1 className="text-white">Terms             </h1>
                    <h1 className="text-white">Privacy Policy</h1>
                    <h1 className="text-white">Cookie Setting</h1>
                </div>

            </div>
        </>
    );
}

export default Footer;