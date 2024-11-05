import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Milestone data
const milestones = [
  {
    title: `What do Vcodewonders do?`,
    description: `We help companies hire top Software engineers within a short period of time. We have a specialised division called Vcodehub to help you build next-generation products from the ground up.`,
  },
  {
    title: `What is the Cost of Hiring Engineers from Vcodewonders?`,
    description: `Since we do not work with intermediaries, we can guarantee that our rate card would be the best in the industry`,
  },
  {
    title: `Why is Vcodewonders different from other Tech Companies?`,
    description: `
1. Our secret sauce is the aggressive vetting process. Our team of experts have 3 levels of Checkpoints which are both automated via AI and manual to verify the engineers to make sure that we are delivering the client expectations.
2. Either you want to hire top talent, or engage in Project based work, we can be a One-stop Digital shop.
3. Transparency and reliability. We always aim at delivering the client’s expectations without any hassles.`,
  },
  {
    title: `What Technologies can Vcodewonders Cater?`,
    description: `Vcodewonders is an Industry leading Software Brand that has the ability to cater almost all the popular Tech Stacks. We can cater React, Angular, Node, Java, Golang, Python, MEAN, MERN, Oracle, Salesforce, IBM Maximo, AI/ML etc..`,
  },
  {
    title: `How does the Billing Work?`,
    description: `No upfront fees or Advance payments. Yes, billing would be raised at the end of every calendar month which is due within 7 working days of the following month.`,
  },
  {
    title: `Are the Engineers available on my Timezone?`,
    description: `We are currently catering clients in the US, UK, France, Germany, APAC, MENA regions. So, it means that we have Engineers who can work on your timezones.`,
  },
];

const MilestoneAbout = () => {
  return (
    <div className="py-10 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-12 text-left">Why We are Different?</h2>
        <div className="relative space-y-12">
          {/* Timeline line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
          {milestones.map((milestone, index) => (
            <MilestoneCard key={index} milestone={milestone} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Individual milestone card
const MilestoneCard = ({ milestone, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Triggers when 20% of the element is visible
    triggerOnce: true, // Only trigger once
  });

  // Start the animation when the card is in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={`relative flex flex-col items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} md:space-x-8`}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: index % 2 === 0 ? 100 : -100 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Milestone content */}
      <motion.div
        className="w-full md:w-5/12 bg-white shadow-md p-6 rounded-lg relative z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: index * 0.3 }}
      >
        <h3 className="text-xl font-semibold">{milestone.title}</h3>
        <p className="text-gray-500 mt-2 whitespace-pre-line">{milestone.description}</p>
      </motion.div>

      {/* Connector Circle */}
      <motion.div
        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold absolute z-20 left-1/2 transform -translate-x-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: index * 0.3 }}
      >
        {index + 1}
      </motion.div>
    </motion.div>
  );
};

export default MilestoneAbout;
