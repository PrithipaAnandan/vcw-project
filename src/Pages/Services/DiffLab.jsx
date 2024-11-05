import { useState } from "react";

function DiffLab() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the clicked FAQ
  };

  const faqs = [
    {
      question: "What do Vcodewonders do?",
      answer: "We help companies hire top Software engineers within a short period of time. We have a specialised division called Vcodehub to help you build next-generation products from the ground up."
    },
    {
      question: "How does Vcodewonders work?",
      answer: "We connect clients with skilled engineers who meet specific project needs, ensuring a smooth hiring and development process."
    },
    {
      question: "What technologies do Vcodewonders engineers specialize in?",
      answer: "Our engineers specialize in various technologies, including React.js, Node.js, Python, cloud computing, and AI, ensuring we meet diverse client needs."
    },
    {
      question: "How does Vcodewonders ensure the quality of its engineers?",
      answer: "Our rigorous vetting process ensures we only hire the top 5% of engineers, ensuring that every client gets world-class talent for their projects."
    },
    {
      question: "What makes Vcodewonders different from other software development companies?",
      answer: "We differentiate ourselves through our speed, flexibility, and ability to align the best engineers to suit the specific needs of your project."
    },
    {
      question: "What services does Vcodewonders provide?",
      answer: "We specialize in software development, offering everything from project management to staffing top-tier engineers to build scalable solutions."
    }
  ];

  return (
    <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 my-1 overflow-x-hidden">
    <h2 className="text-5xl font-bold mb-12 text-left">Why We are Different?</h2>
    {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 py-4">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
            >
                <h2 className="text-xl font-semibold text-black text-left">
                    {faq.question}
                </h2>
                <button className="text-gray-400 font-bold">
                    {openIndex === index ? (
                        <span className="text-3xl text-blue-600">-</span>
                    ) : (
                        <span className="text-3xl text-blue-400">+</span>
                    )}
                </button>
            </div>
            {openIndex === index && (
                <div className="mt-3 text-black text-left">
                    <p>{faq.answer}</p>
                </div>
            )}
        </div>
    ))}
</div>

  );
}

export default DiffLab;
