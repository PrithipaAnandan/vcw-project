import Header from "../Header";
import { FaUser } from 'react-icons/fa';
import { IoMdLocate } from "react-icons/io";
import { FaBriefcase } from 'react-icons/fa'; // Font Awesome icons
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


function Frontend() {
    const navigate = useNavigate();
    return (<>
        <div className="mb-40">
            <Header />

            <div className="mx-20">
                <h1 className="text-5xl font-bold text-left">Front End Development</h1>
                <div className="flex space-x-8 py-4">
                    <h1 className=""> <FaUser className="inline m-2" />0 Years</h1>
                    <h1> <IoMdLocate className="inline m-2" />Puducherry</h1>
                    <h1><FaBriefcase className="inline m-2" />Full Time</h1>
                </div>
            </div>

            <div className="mx-20">
                <h1 className="text-xl font-bold text-left">About Vcode Wonder </h1>
                <p className="py-3">
                    <span className="font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-xl mx-4">Vcode Wonder</span>
                    is an innovative software company focused on creating high-quality
                    digital experiences.<br />  Our projects span various fields,
                    from dynamic event platforms to cutting-edge e-commerce sites,<br /> 
                    Join our team to help build visually stunning, responsive, 
                    user-centered interfaces<br /> and high-performance web applications.
                     
                    

                </p>

                <h1 className="text-xl font-bold text-left">Key Responsibilities</h1>
                <p className="py-3">
                    <li>Develop, implement, and maintain responsive, user-friendly front-end interfaces for web applications.</li>
                    <li>Work closely with designers and backend developers to create cohesive and intuitive user experiences.</li>
                    <li>Optimize applications for maximum speed, scalability, and cross-device functionality.</li>
                    <li>Write clean, efficient code and contribute to code reviews to ensure high standards.</li>
                    <li>Troubleshoot and resolve front-end issues and bugs across different browsers and devices.</li>
                    <li>Stay updated on emerging front-end technologies, frameworks, and best practices.</li>
                </p>

                <h1 className="text-xl font-bold text-left">Qualifications</h1>
                <p className="py-3">
                    <li>Bachelor’s degree in Computer Science, Web Development, or a related field.</li>
                    <li>Proficiency in HTML, CSS, JavaScript, and modern front-end frameworks (e.g., React, Vue, or Angular).</li>
                    <li>Experience with RESTful APIs and integrating front-end applications with backend systems.</li>
                    <li>Familiarity with version control systems (e.g., Git) and frontend build tools (e.g., Webpack, npm).</li>
                    <li>Strong eye for design and a solid understanding of UI/UX principles.</li>
                    <li>Problem-solving skills and the ability to collaborate effectively in a team environment.</li>
                </p>

                <h1 className="text-xl font-bold text-left">What We Offer</h1>
                <p>
                    <li>Competitive salary and performance-based bonuses.</li>
                    <li>Opportunities for skill development and career advancement.</li>
                    <li>Flexible working hours and remote working options.</li>
                    <li>Inclusive and collaborative team culture.</li>
                    <li>Chance to work on challenging projects and utilize the latest front-end technologies.</li>
                </p>
            </div>

            <div className="flex justify-center">
                <button className="text-xl border rounded-xl px-4 py-2 my-9 bg-blue-400 hover:bg-blue-500" onClick={()=> navigate("/contactus")}>Apply for job</button>
            </div>

        </div>
        <Footer />
    </>)
}
export default Frontend;