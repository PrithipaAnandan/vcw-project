import React, { useEffect, useState } from "react";
import w1 from '../assets/w1.gif'; 
import w2 from '../assets/u2.gif';
import w3 from '../assets/w2.gif';
import w4 from '../assets/m1.gif';
import "../App.css";
import ClientLogo from "../Components/ClientLogo";
import TagLine1 from "../Components/TagLine/Content/TagLIne1";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

function HomePage() {
  const letterWorld = ['Web Development', 'Mobile Development', 'Manual Testing', 'UI/UX Design'];
  const colors = ['#FFD37D', '#c2410c', '#fcd34d', '#65a30d'];
  const [letterIndex, setLetterIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const images = [w1, w2, w3, w4];
  const [imageIndex, setImageIndex] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setLetterIndex((prevIndex) => (prevIndex + 1) % letterWorld.length);
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        setIsTransitioning(false);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto space-x-0 md:space-x-4">
  <div className="relative w-32 h-32 md:w-48 md:h-48">
    <img
      src={images[imageIndex]}
      alt="Icon"
      className={`w-full h-full transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
    />
  </div>

  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mt-4 md:mt-0">
    Using Application for
  </h1>
</div>


      <div className="container">
        <div>Web Development</div>
        <div>Mobile Development</div>
        <div>UI/UX Design</div>
        <div>Manual Testing</div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-10 space-y-4 md:space-y-0 md:space-x-4">
  <h1 className="text-6xl md:text-6xl ">In Our Business</h1>

  <div>
    <img
      src={images[imageIndex]}
      alt="Icon"
      className="w-[150px] h-[150px]"
    />
  </div>
</div>


      <ClientLogo />
      <TagLine1 />
      <Footer />
    </>
  );
}

export default HomePage;
