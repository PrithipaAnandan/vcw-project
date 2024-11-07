function TagLine6() {
    return (
      <div className="h-screen w-full flex justify-center items-center mb-20 overflow-hidden">
        <div className="w-[1400px] h-full px-5 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Column for Text */}
          <div className="flex flex-col  items-center md:items-start justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center md:text-left leading-tight">
              "Code that Wonders, <br />
              <span className="md:mx-6">Solutions that Inspire."</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg py-3 md:py-5 text-center md:text-left">
              <span>At </span>
              <span className="font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-xl sm:text-2xl">
                Vcode Wonder
              </span>, we craft innovative solutions that blend functionality and design. From dynamic stock management to seamless e-commerce platforms, our projects are built to inspire and empower. Discover how our code brings each client's vision to life.
            </p>
          </div>
  
          {/* Second Column for Image */}
          <div className="flex justify-center items-center">
            <img
              src="https://www.bloopanimation.com/wp-content/uploads/2020/06/How-to-Create-a-Portfolio-Website-featured.jpg"
              alt="Vcode Wonder Service"
              className="w-full max-w-md sm:max-w-lg md:w-[400px] lg:w-[500px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default TagLine6;
  