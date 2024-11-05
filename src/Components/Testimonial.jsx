function Testimonial() {
  return (
    <>
      <div className=" mx-20 px-4  sm:px-6 lg:px-8 my-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Testimonial Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7AW-WgkjvMURiVHiJqFAM1e3aB4E_IcNtNI_SPNji3Zfu96x8rDXoihnOP8pAdP_f8k&usqp=CAU"
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div>
                <h4 className="font-semibold text-lg text-gray-800">Dilip Kandasamy</h4>
                <p className="text-gray-500 text-md">@dilipkandasamy</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces. 🎉
            </p>
            <div className="flex justify-between items-center mt-4">
              <button className="text-blue-500 text-lg">See on X</button>
              <span className="text-gray-400 text-lg">Oct 17, 2024</span>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7AW-WgkjvMURiVHiJqFAM1e3aB4E_IcNtNI_SPNji3Zfu96x8rDXoihnOP8pAdP_f8k&usqp=CAU"
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div>
                <h4 className="font-semibold text-lg text-gray-800">Dilip Kandasamy</h4>
                <p className="text-gray-500 text-md">@dilipkandasamy</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces. 🎉
            </p>
            <div className="flex justify-between items-center mt-4">
              <button className="text-blue-500 text-lg">See on X</button>
              <span className="text-gray-400 text-lg">Oct 17, 2024</span>
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7AW-WgkjvMURiVHiJqFAM1e3aB4E_IcNtNI_SPNji3Zfu96x8rDXoihnOP8pAdP_f8k&usqp=CAU"
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div>
                <h4 className="font-semibold text-lg text-gray-800">Dilip Kandasamy</h4>
                <p className="text-gray-500 text-md">@dilipkandasamy</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces. 🎉
            </p>
            <div className="flex justify-between items-center mt-4">
              <button className="text-blue-500 text-lg">See on X</button>
              <span className="text-gray-400 text-lg">Oct 17, 2024</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
