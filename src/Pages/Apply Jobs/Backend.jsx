import Header from "../Header";
import { FaUser } from 'react-icons/fa';
import { IoMdLocate } from "react-icons/io";
import { FaBriefcase } from 'react-icons/fa'; // Font Awesome icons
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


function Backend (){
    const navigate = useNavigate();
    return(<>
    <div className="mb-40">
        <Header/>

        <div className="mx-20">
            <h1 className="text-5xl font-bold text-left">BackEnd Development</h1>
            <div className="flex space-x-8 py-4">
            <h1 className=""> <FaUser className="inline m-2"/>0 Years</h1>
            <h1> <IoMdLocate className="inline m-2"/>Puducherry</h1>
            <h1><FaBriefcase className="inline m-2"/>Full Time</h1>
            </div>
        </div>

        <div className="mx-20">
            <h1 className="text-xl font-bold text-left">About Vcode Wonder </h1>
            <p className="py-3"> 
                 <span className="font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-xl mx-4">Vcode Wonder</span>
                  is a forward-thinking software company specializing in innovative web solutions<br/> and 
                  digital products. Our expertise spans diverse projects, from event management platforms 
                  to e-commerce<br/> systems, with a focus on scalability, performance, and exceptional user 
                  experiences. Join our team to shape <br/>the future of software development with a driven and 
                  dynamic team.



</p>

            <h1 className="text-xl font-bold text-left">Key Responsibilities</h1>
            <p className="py-3">
                <li>Develop and maintain scalable, high-performance backend services and APIs.</li>
                <li>Collaborate closely with frontend developers to integrate user-facing elements with server-side logic.</li>
                <li>Design, build, and maintain databases, ensuring data integrity and efficiency.</li>
                <li>Optimize applications for maximum speed and scalability.</li>
                <li>Troubleshoot and debug complex server-side issues.</li>
                <li>Ensure code quality, security, and best practices are followed across all projects.</li>
            </p>  

            <h1 className="text-xl font-bold text-left">Qualifications</h1>
            <p className="py-3">
                <li>Develop and maintain scalable, high-performance backend services and APIs.</li>
                <li>Collaborate closely with frontend developers to integrate user-facing elements with server-side logic.</li>
                <li>Design, build, and maintain databases, ensuring data integrity and efficiency.</li>
                <li>Optimize applications for maximum speed and scalability.</li>
                <li>Troubleshoot and debug complex server-side issues.</li>
                <li>Ensure code quality, security, and best practices are followed across all projects.</li>
            </p>
                
            <h1 className="text-xl font-bold text-left">What We Offer</h1>
            <p>
                <li>Competitive salary with performance bonuses.</li>
                <li>Opportunities for growth and skill development.</li>
                <li>Flexible work environment and remote work options.</li>
                <li>Inclusive, collaborative, and innovative work culture.</li>
                <li>Chance to work on challenging projects with cutting-edge technologies.</li>
            </p>
                    </div>
                
                    <div className="flex justify-center">
                <button className="text-xl border rounded-xl px-4 py-2 my-9 bg-blue-400 hover:bg-blue-500" onClick={() => navigate("/contactus")}>Apply for job</button>
            </div>

    </div>

    <Footer/>
    </>)
}
export default Backend;