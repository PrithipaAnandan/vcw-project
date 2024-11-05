function TagLine3() {
    return (
        <>
            <div className="text-black md:my-20 grid grid-cols-1 md:grid-cols-2 gap-6 px-5 md:px-10 lg:px-20 relative overflow-hidden">
                {/* First Column for Text */}
                <div className="flex flex-col justify-center items-center md:items-start">
                    <h1 className="text-3xl whitespace-nowrap sm:text-4xl md:text-5xl lg:text-6xl  mx-0 md:mx-5 lg:mx-20 text-center md:text-left">
                        "Empower Your Vision with <br /> 
                        <span className="">Expert Talent"</span>
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg py-3 md:py-5 mx-0 md:mx-5 lg:mx-20 text-center md:text-left">
                        <span>At </span> 
                        <span className="font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-xl sm:text-2xl"> 
                            Vcode Wonder
                        </span>, we bring top-tier software developers, designers, and project 
                        managers to your team. Whether you're building a new product or scaling an existing solution, 
                        our vetted experts ensure smooth, reliable, and high-quality results. Hire the best to accelerate 
                        your business growth.
                    </p>
                </div>

                {/* Second Column for Image */}
                <div className="flex justify-center items-center mt-5 md:mt-0">
                    <img
                        src="https://invedus.com/images/services/multimedia-and-animation.png"
                        alt="Vcode Wonder Service"
                        className="w-full max-w-md sm:max-w-lg md:w-[500px] lg:w-[700px] h-auto object-cover"
                    />
                </div>
            </div>
        </>
    );
}

export default TagLine3;
