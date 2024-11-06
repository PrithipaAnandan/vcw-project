import React from 'react';

function TagLine1() {
  return (
    <div className="flex items-center pb-74  justify-center p-8"> {/* Changed from min-h-screen to h-screen */}
      <div className="flex flex-col md:flex-row items-start bg-white p-6">
        
        {/* Left Content */}
        <div className="md:w-1/2 mb-4 md:mb-0 ">
        <h1 className="text-5xl text-left mx-40 leading-snug font-mediumbold text-[#3658D3] mb-4">
            Smart Software
            Solutions for a 
            Digital Future
        </h1>

          <p className="text-gray-600 py-9 leading-8 mx-40">
            At Vcode Wonder we specialize in crafting custom software that drives business growth and innovation.
            Our team utilizes the latest technologies to deliver scalable, secure, and future-ready solutions.
            Partner with us to unlock the full potential of digital transformation and stay ahead of the competition.
          </p>
        </div>

        {/* Right Placeholder Box */}
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="w-full">
            <img                     
              src="https://invedus.com/images/services/multimedia-and-animation.png"
              alt="" 
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default TagLine1;