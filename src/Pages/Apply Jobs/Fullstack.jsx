import Header from "../Header";
import { FaUser } from 'react-icons/fa';
import { IoMdLocate } from "react-icons/io";
import { FaBriefcase } from 'react-icons/fa'; // Font Awesome icons
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


function Fullstack (){
    const navigate = useNavigate();
    return(<>
    <div className="mb-40">
        <Header/>

        <div className="mx-20">
            <h1 className="text-5xl font-bold text-left">Full Stack Development</h1>
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
              is a dynamic software development company specializing in high-performance
                 web and mobile<br/> applications. We work with innovative technology to create solutions that 
                 drive business efficiency and user engagement.<br/> Our team of experts is passionate about crafting
                  customized software that meets real-world needs with robust and scalable <br/> code. Joinus, and be 
                  part of a collaborative environment that encourages growth and creative problem-solving.</p>

            <h1 className="text-xl font-bold text-left">Key Responsibilities</h1>
            <p className="py-3">
                <li>Develop and maintain scalable full-stack applications using modern technologies (e.g., React.js, Node.js).</li>
                <li>Design front-end  with a focus on user experience and accessibility.</li>
                <li>Collaborate with team members to define and implement backend API services.</li>
                <li>Optimize applications for maximum speed and scalability across different platforms.</li>
                <li>Write clean, maintainable code and ensure code quality through testing and code reviews.</li>
                <li>Participate in all phases of the development lifecycle and contribute to process improvements.</li>
            </p>  

            <h1 className="text-xl font-bold text-left">Qualifications</h1>
            <p className="py-3">
                <li> 0 years in full-stack development with experience in technologies such as React.js, Node.js, Express, and MongoDB. </li>
                <li>Bachelor’s degree in Computer Science or a related field (or equivalent experience).</li>
                <li>Proficient in JavaScript, HTML, CSS, and responsive design.</li>
                <li>Strong understanding of RESTful services, APIs, and backend development.</li>
                <li>Familiarity with version control (Git) and collaborative development.</li>
                <li> Strong problem-solving skills, effective communication, and teamwork abilities.</li>
                <li> Experience with cloud platforms (AWS, GCP), Docker, and CI/CD pipelines.</li>
            </p>
                
            <h1 className="text-xl font-bold text-left">What We Offer</h1>
            <p>
                <li>Opportunities for professional development and learning through workshops and training programs.</li>
                <li> Hybrid working model with flexible hours for work-life balance.</li>
                <li> Comprehensive health insurance, paid leave, and competitive compensation packages.</li>
                <li>A supportive and inclusive team environment that values creativity and innovation.</li>
            </p>
                    </div>
                
                    <div className="flex justify-center">
                <button className="text-xl border rounded-xl px-4 py-2 my-9 bg-blue-400 hover:bg-blue-500" onClick={() => navigate("/contactus")}>Apply for job</button>
            </div>

    </div>

    <Footer/>
    </>)
}
export default Fullstack;