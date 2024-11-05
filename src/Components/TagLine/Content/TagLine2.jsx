function TagLine2() {
    return (
        <div className="my-40 mx-4 md:mx-20">
            <div className="text-black grid grid-cols-1 md:grid-cols-2 gap-6 relative overflow-hidden">
                {/* First Column for Text */}
                <div className="flex flex-col">
                    <h1 className="text-4xl md:text-6xl  whitespace-nowrap">
                        "Code Beyond Expectations"
                    </h1>
                    <p className="text-base md:text-lg py-5">
                        <span className="ml-5">At </span>
                        <span className="font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-2xl">
                            Vcode Wonder
                        </span>, we specialize in crafting software
                        solutions that drive impact and innovation. Our dedicated team
                        blends technical expertise with a commitment to client success,
                        delivering tailored digital experiences. We turn ideas into solutions
                        that empower growth and transform industries."
                    </p>
                </div>

                {/* Second Column for Image */}
                <div className="flex justify-center items-center">
                    <img
                        src="https://img.freepik.com/premium-vector/group-people-are-gathered-around-computer_704913-24916.jpg"
                        alt="Vcode Wonder Service"
                        className="w-full max-w-md h-auto" // Responsive image
                    />
                </div>
            </div>
        </div>
    );
}

export default TagLine2;
