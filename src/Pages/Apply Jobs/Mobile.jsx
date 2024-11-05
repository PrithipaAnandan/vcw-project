import Header from "../Header";
import { FaUser } from 'react-icons/fa';
import { IoMdLocate } from "react-icons/io";
import { FaBriefcase } from 'react-icons/fa'; // Font Awesome icons
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


function Mobile (){
    const navigate = useNavigate();
    return(<>
    <div className="mb-40">
        <Header/>

        <div className="mx-20">
            <h1 className="text-5xl font-bold text-left">Mobile App Development</h1>
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
                is a pioneering software company dedicated to developing top-quality 
                digital products,<br/> including custom mobile applications. We focus on,
                delivering mobile solutions that are intuitive,<br/> visually appealing,
                and high-performing across iOS and Android platforms. Join us to work on 
                innovative mobile projects,<br/>  leveraging the latest technologies to 
                create impactful digital experiences. </p>

            <h1 className="text-xl font-bold text-left">Key Responsibilities</h1>
            <p className="py-3">
               <li>Design, develop, and maintain cross-platform mobile applications (iOS and Android) with a focus on user experience, performance, and scalability.</li>
               <li>Collaborate with UI/UX designers and backend developers to integrate design and functionality effectively.</li>
               <li>Optimize mobile applications for speed, usability, and performance on multiple devices.</li>
               <li>Write clean, efficient, and maintainable code, ensuring code quality through regular reviews.</li>
               <li>Troubleshoot and resolve issues across a range of devices and operating systems.</li>
               <li>Stay up-to-date with the latest mobile development frameworks, libraries, and best practices.</li>
            </p>  

            <h1 className="text-xl font-bold text-left">Qualifications</h1>
            <p className="py-3">
             <li>Bachelor’s degree in Graphic Design, Interaction Design, or a related field.</li>
             <li>Proven experience with design tools such as Adobe XD, Figma, or Sketch.</li>
             <li>Strong portfolio showcasing UI/UX design skills and user-centered design principles.</li>
             <li>Experience with wireframing, prototyping, and creating user flows.</li>
             <li>Familiarity with front-end development basics (HTML/CSS) is a plus.</li>
             <li>Excellent problem-solving skills and attention to detail.</li>
            </p>
                
            <h1 className="text-xl font-bold text-left">What We Offer</h1>
            <p>
                    <li>Competitive salary and performance-based bonuses.</li>
                    <li>Opportunities for professional growth and learning new technologies.</li>
                    <li>Flexible working hours and remote working options.</li>
                    <li>Inclusive, collaborative team culture that values innovation and creativity.</li>
                    <li>Chance to work on diverse, challenging projects with the latest mobile technologies.</li>
            </p>
                    </div>
                
                    <div className="flex justify-center">
                <button className="text-xl border rounded-xl px-4 py-2 my-9 bg-blue-400 hover:bg-blue-500" onClick={()=> navigate("/contactus")}>Apply for job</button>
            </div>

    </div>
    <Footer/>
    </>)
}
export default Mobile;