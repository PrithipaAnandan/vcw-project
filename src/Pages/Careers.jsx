import { useState } from "react";
import TagLine5 from "../Components/TagLine/Content/TagLine5";
import Header from "./Header";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const jobData = [
    { title: "Full Stack Development", location: "Puducherry", type: "Full Time", additional: "+9" },
    { title: "Backend Development", location: "Puducherry", type: "Full Time", additional: "+3" },
    { title: "Frontend Development", location: "Puducherry", type: "Full Time", additional: "+5" },
    { title: "Mobile App Development", location: "Puducherry", type: "Full Time", additional: "+2" },
    { title: "UI/UX Design", location: "Puducherry", type: "Full Time", additional: "+4" },
    { title: "Manual Testing", location: "Puducherry", type: "Full Time", additional: "+8" }
];

function Careers() {
    const [fulltime, setFulltime] = useState(false);
    const navigate = useNavigate();

    const handleFulltime = () => {
        setFulltime(!fulltime);
    };

    const handleJobClick = (title) => {
        switch (title) {
            case "Full Stack Development":
                navigate("/fullstack");
                break;
            case "Backend Development":
                navigate("/backend");
                break;
            case "UI/UX Design":
                navigate("/uiuxdesign");
                break;
            case "Manual Testing":
                navigate("/manualtesting");
                break;
            case "Frontend Development":
                navigate("/frontend");
                break;
            case "Mobile App Development":
                navigate("/mobile");
                break;
            default:
                break;
        }
    };

    return (
        <>
            <div className="mb-40">
                <Header />
                <TagLine5 />

                <div className="mx-4 sm:mx-10 lg:mx-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl text-left  font-bold">Opening Jobs</h1>
                    <p className="py-3 text-lg">Transform your career into the new game, hire & find your jobs faster than before.</p>
                </div>

                <div className="mx-4 sm:mx-10 space-x-16 lg:mx-20 py-11 flex flex-col md:flex-row items-center">
                    <div className="border rounded-xl flex  items-center flex-grow mb-4 md:mb-0">
                        <FaSearch className="inline my-4 mx-3" />
                        <input
                            type="search"
                            placeholder="Search for your role"
                            className="px-3 py-3 font-bold outline-none"
                        />
                    </div>

                    <div className="relative">
                        <button
                            type="button"
                            className="border px-5 w-full md:w-60 py-3 rounded-xl font-bold outline-none flex items-center justify-between"
                            onClick={handleFulltime}
                        >
                            Full Time <FaChevronDown className="inline ml-2" />
                        </button>
                        {fulltime && (
                            <div className="absolute mt-2 w-full bg-white shadow-lg rounded-md p-2">
                                <button className="px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">Full Time</button>
                                <button className="px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left" onClick={() => navigate("/parttime")}>Part Time</button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-4 sm:mx-10 lg:mx-20 gap-4">
                    {jobData.map((elem, index) => (
                        <div 
                            key={index} 
                            className="border shadow-lg shadow-blue-700 cursor-pointer py-9 rounded-xl text-center hover:bg-gray-100 transition"
                            onClick={() => {
                                handleJobClick(elem.title);
                            }}
                        >
                            <button className="font-bold text-lg">{elem.title}</button>
                            <h1 className="py-2 text-sm">{elem.location}</h1>
                            <div className="flex justify-center items-center space-x-2">
                                <div className="border rounded-md px-3 py-1 shadow shadow-blue-700">{elem.type}</div>
                                <div className="border rounded-md px-3 py-1 shadow shadow-blue-700">{elem.additional}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Careers;
