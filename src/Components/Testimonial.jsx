import React, { useState } from 'react';

const testimonials = [
  {
    image: 'https://thumbs.dreamstime.com/z/indian-man-smiling-confident-young-people-standing-isolated-white-background-31400067.jpg',
    name: 'Sameer Rai',
    title: 'Product Head',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud',
  },
  {
    image: 'https://thumbs.dreamstime.com/b/full-length-serious-confident-young-businesswoman-crossed-arms-standing-isolated-against-white-wall-one-single-person-full-171595613.jpg',
    name: 'John Doe',
    title: 'Chief Engineer',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
];

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { image, name, title, feedback } = testimonials[currentIndex];

  return (
    <div className="flex mx-52 p-4">
      <div className="relative w-[1100px] bg-white shadow-lg rounded-xl border p-6">
        
        {/* Left Button */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-indigo-100 rounded-full p-2 hover:bg-indigo-200 focus:outline-none"
        >
          <span className="text-indigo-600 text-2xl">&#8249;</span>
        </button>

        {/* Content */}
        <div className="flex flex-col items-center text-center">
          
          {/* Rectangle Image */}
          <div className='grid grid-cols-2'>
          <div className="mb-4 w-full h-80 overflow-hidden rounded-lg">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          
          {/* Feedback Text */}
          <div className="flex items-center mb-2">
            <p className="text-gray-600 italic">{feedback}</p>
          </div>
           {/* Name and Title */}
           <div className="flex items-center mt-4 ">
            <img src={image} alt={name} className="w-8 h-8 rounded-full mr-3" />
            <div>
              <p className="font-bold">{name}</p>
              <p className="text-sm text-gray-500">{title}</p>
            </div>
          </div>
          </div>
         
        </div>

        {/* Right Button */}
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-indigo-600 rounded-full p-2 hover:bg-indigo-700 focus:outline-none"
        >
          <span className="text-white text-2xl">&#8250;</span>
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
