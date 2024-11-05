function TagLine7() {
    return (
        <>
            <div className="text-black my-20 md:my-40 px-5 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-6 relative overflow-hidden">
                {/* First Column for Text */}
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-3xl whitespace-nowrap sm:text-4xl md:text-5xl lg:text-6xl text-center md:text-left">
                        "Setting Standards, <br />
                        <span className="md:mx-6">Ensuring Success"</span>
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg py-3 md:py-5 text-center md:text-left">
                        <span>"Our </span>
                        SOP`s at <span className="font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-xl sm:text-2xl">
                            Vcode Wonder
                        </span> define clear standards for quality and consistency in every project. By following these guidelines, we ensure each client receives reliable and innovative solutions tailored to their needs."
                    </p>
                </div>

                {/* Second Column for Image */}
                <div className="flex justify-center items-center mt-5 md:mt-0">
                    <img
                        src="https://marketersgroup.es/wp-content/uploads/2022/11/que-es-un-call-to-action.jpg.webp"
                        alt="Vcode Wonder Service"
                        className="w-full max-w-md sm:max-w-lg md:w-[500px] lg:w-[700px] h-auto object-cover"
                    />
                </div>
            </div>
        </>
    );
}

export default TagLine7;
