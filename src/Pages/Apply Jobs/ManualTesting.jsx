import Header from "../Header";
import { FaUser } from 'react-icons/fa';
import { IoMdLocate } from "react-icons/io";
import { FaBriefcase } from 'react-icons/fa'; // Font Awesome icons
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


function ManualTesting (){
    const navigate = useNavigate();

    return(<>
    <div className="mb-40">
        <Header/>

        <div className="mx-20">
            <h1 className="text-5xl font-bold text-left">Manual Testing</h1>
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
                 is an innovative software company specializing in high-quality 
                 digital products and <br/>solutions, with expertise in developing projects
                  like event management platforms, e-commerce systems, <br/> and custom applications.
                   We’re committed to delivering exceptional user experiences through rigorous
                    testing  <br/>and quality assurance. Join us to help ensure that our software
                     consistently meets high standards and functions <br/> seamlessly for users.




</p>

            <h1 className="text-xl font-bold text-left">Key Responsibilities</h1>
            <p className="py-3">
             <li>Perform comprehensive manual testing on web applications, identifying and documenting issues.</li>
             <li>Develop and execute detailed test cases, scenarios, and scripts.</li>
             <li>Collaborate closely with developers and stakeholders to understand application requirements.</li>
             <li>Conduct regression, integration, and system testing as part of the software development lifecycle.</li>
             <li>Report and track software defects, ensuring they are resolved before release.</li>
            </p>  

            <h1 className="text-xl font-bold text-left">Qualifications</h1>
            <p className="py-3">
                <li>Bachelor’s degree in Computer Science, Information Technology, or a related field.</li>
                <li>Experience with manual testing methodologies and software development processes.</li>
                <li>Familiarity with bug-tracking tools (e.g., JIRA, Bugzilla) and test case management tools.</li>
                <li>Strong analytical skills with a detail-oriented approach to identifying bugs.</li>
                <li>Excellent communication skills for effective collaboration.</li>
                <li>Understanding of QA best practices and a willingness to learn automated testing basics is a plus.</li>
            </p>
                
            <h1 className="text-xl font-bold text-left">What We Offer</h1>
            <p>
                <li>Competitive salary and potential for performance bonuses.</li>
                <li>Opportunities for career growth and skill development.</li>
                <li>Flexible working hours and remote work options.</li>
                <li>Inclusive, supportive, and collaborative team environment.</li>
                <li>Chance to work on challenging projects in a dynamic tech environment.</li>
            </p>
                    </div>
                
                    <div className="flex justify-center">
                <button className="text-xl border rounded-xl px-4 py-2 my-9 bg-blue-400 hover:bg-blue-500" onClick={() => navigate("/contactus")}>Apply for job</button>
            </div>

    </div>
    <Footer/>
    </>)
}
export default ManualTesting;