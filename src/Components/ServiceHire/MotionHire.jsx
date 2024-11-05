import React from 'react';
import { motion } from 'framer-motion';

const Milestone = ({ step, title, description, imageSrc, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center py-10`}>
      {/* Image with motion */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ x: reverse ? 100 : -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <img src={imageSrc} alt={title} className="w-full h-auto max-w-md md:max-w-lg lg:max-w-xl object-cover" />
      </motion.div>

      {/* Text content with motion */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left px-4 mt-6 md:mt-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">{step}. {title}</h2>
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg">{description}</p>
      </motion.div>
    </div>
  );
};

const MotionHire = () => {
  const milestones = [
    {
      step: 1,
      title: "Thousands of inbound applications",
      description: "We begin by casting a wide net, assessing thousands of inbound applications to identify exceptional candidates among a diverse talent pool.",
      imageSrc:"https://www.esparkinfo.com/wp-content/uploads/2024/05/Frame-1321314323.svg", 
    },
    {
      step: 2,
      title: "Interview with our in-house, AI Interviewer",
      description: "We then screen thousands of candidates at scale with our AI Interviewer, the best technical vetting tool powered by AI.",
      imageSrc:"https://img.freepik.com/free-vector/call-center-customer-service-job-animation-vector-design_40876-2656.jpg", 
    },
    {
      step: 3,
      title: "Interview with our in-house, AI Interviewer",
      description: "We then screen thousands of candidates at scale with our AI Interviewer, the best technical vetting tool powered by AI.",
      imageSrc:"https://www.infomazeelite.com/wp-content/uploads/2022/03/Hire-Dedicated-Development-Team.png", 
    },
    {
      step: 4,
      title: "Interview with our in-house, AI Interviewer",
      description: "We then screen thousands of candidates at scale with our AI Interviewer, the best technical vetting tool powered by AI.",
      imageSrc:"https://img.freepik.com/premium-vector/team-young-professionals-working-computers-collaborative-office-environment_126712-18050.jpg", 
    },
    {
      step: 5,
      title: "Interview with our in-house, AI Interviewer",
      description: "We then screen thousands of candidates at scale with our AI Interviewer, the best technical vetting tool powered by AI.",
      imageSrc: "https://www.gmtasoftware.com/web-stories/wp-content/uploads/2023/05/mobile-app-development.png", 
    },
  ];

  return (
    <div className="text-black mx-auto max-w-screen-xl my-40 px-4 sm:px-8">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-left font-bold mb-12">Our Vetting Process</h2>
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
  );
};

export default MotionHire;
