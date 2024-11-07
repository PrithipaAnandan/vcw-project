import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png";
import portfolio3 from "../assets/portfolio3.png";
import portfolio4 from "../assets/portfolio4.png";
import portfolio5 from "../assets/portfolio5.png";
import TagLine6 from '../Components/TagLine/Content/TagLine6';
import Footer from "./Footer";

const Milestone = ({ step, title, description, imageSrc, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center py-8 md:py-10`}>
      {/* Image Section */}
      <div className="w-full md:w-1/2 p-4">
        <img src={imageSrc} alt={title} className="w-full h-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl object-cover" />
      </div>

      {/* Text Section with Animation */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: false, amount: 0.8 }}
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">{step}. {title}</h2>
        <p className="text-gray-500 text-sm sm:text-base lg:text-lg">{description}</p>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const milestones = [
    {
      step: 1,
      title: "HOUSING MARKET",
      description: "Vcode Wonder has a strong track record in the housing market, delivering applications that streamline property listings and elevate user engagement. Rely on us to bring your real estate vision to life.",
      imageSrc: portfolio1,
    },
    {
      step: 2,
      title: "ASTROLOGY",
      description: "Vcode Wonder has successfully developed an astrology web application that offers personalized horoscopes and insightful astrological readings. Our intuitive design and engaging features create a captivating experience for users exploring their astrological journey.",
      imageSrc: portfolio2,
    },
    {
      step: 3,
      title: "NAVIGATION",
      description: "Vcode Wonder has extensive experience in creating navigation map tracking web applications that provide real-time location updates. Our solutions ensure seamless navigation and enhance user interaction with intuitive design and functionality.",
      imageSrc: portfolio3,
    },
    {
      step: 4,
      title: "INDUSTRY INSPECTION",
      description: "Vcode Wonder has developed a robust industry inspection web application that streamlines the inspection process and enhances reporting accuracy. Our solutions empower businesses to ensure compliance and improve operational efficiency through intuitive design and real-time data access.",
      imageSrc: portfolio4,
    },
    {
      step: 5,
      title: "E-commerce",
      description: "Vcode Wonder has developed dynamic e-commerce web applications that deliver seamless shopping experiences. Our solutions enhance product management and boost customer engagement, driving sales and satisfaction.",
      imageSrc: portfolio5,
    },
  ];

  return (
    <>
      <Header />
      <TagLine6 />
      <div className="text-black mx-4  sm:mx-10 lg:mx-20">
        <div className="mx-auto px-6 py-8">
          <div className="text-center md:text-left mx-2 md:mx-20 mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Portfolio</h2>
          </div>
          {milestones.map((milestone, index) => (
            <Milestone
              key={index}
              step={milestone.step}
              title={milestone.title}
              description={milestone.description}
              imageSrc={milestone.imageSrc}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
