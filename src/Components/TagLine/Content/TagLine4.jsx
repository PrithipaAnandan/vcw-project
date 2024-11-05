function TagLine4() {
    return (
        <>
            <div className="text-black my-20 md:my-40 px-5 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-6 relative overflow-hidden">
                {/* First Column for Text */}
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-3xl sm:text-4xl whitespace-nowrap md:text-5xl lg:text-6xl  mx-0 md:mx-5 lg:mx-20 text-center md:text-left">
                        "Innovative Solutions,<br />
                        <span className="mx-0 md:mx-6">Tailored for You"</span>
                    </h1>
                    <p className="text-sm  sm:text-base md:text-lg py-3 md:py-5 mx-0 md:mx-5 lg:mx-20 text-center md:text-left">
                        <span className="mx-
                        ">At </span>
                        <span className="font-bold  bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-xl sm:text-2xl">
                            Vcode Wonder
                        </span>, we create tailored software solutions that power your business. 
                        From dynamic web applications to complex stock management systems, 
                        our team ensures innovation and reliability in every project. We bring 
                        expertise to help you scale and succeed.
                    </p>
                </div>

                {/* Second Column for Image */}
                <div className="flex justify-center items-center mt-5 md:mt-0">
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/012/939/271/small_2x/animated-presentation-isolated-scene-strategy-meeting-business-plan-looped-flat-2d-characters-4k-footage-with-alpha-channel-colorful-illustration-for-mobile-website-animation-video.jpg"
                        alt="Vcode Wonder Service"
                        className="w-full max-w-md sm:max-w-lg md:w-[500px] lg:w-[700px] h-auto object-cover"
                    />
                </div>
            </div>
        </>
    );
}

export default TagLine4;
