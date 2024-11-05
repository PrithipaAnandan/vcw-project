function TagLine1() {
    return (
        <>
            <div className="text-black grid my-10 md:my-20 grid-cols-1 md:grid-cols-2  md:mx-20 gap-8 relative overflow-hidden">
                {/* First Column for Text */}
                <div className="flex flex-col">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl  whitespace-nowrap text-black">
                "Smart Software Solutions 
                <br /><span className="">for a Digital Future"</span>
                </h1>

                    <p className="text-base py-5 mx-">
                        <span className="ml-5">At </span>
                        <span className="font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-2xl"> 
                            Vcode Wonder
                        </span> we specialize in crafting custom software that drives business growth and innovation.
                        Our team utilizes the latest technologies to deliver scalable, secure, and future-ready solutions.
                        Partner with us to unlock the full potential of digital transformation and stay ahead of the competition.
                    </p>
                </div>

                {/* Second Column for Image */}
                <div className="flex justify-center items-center">
                    <img 
                        src="https://foreignerds.com/wp-content/uploads/2024/01/Tailored-Web-Design-and-Animation-Solutions.png"
                        alt="Vcode Wonder Service"
                        className="w-full mx-14 h-auto max-w-[700px] max-h-[350px]"
                    />
                </div>
            </div>
        </>
    );
}

export default TagLine1;
