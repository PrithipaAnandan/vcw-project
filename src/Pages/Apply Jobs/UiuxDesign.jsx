import Header from "../Header";
import { FaUser } from 'react-icons/fa';
import { IoMdLocate } from "react-icons/io";
import { FaBriefcase } from 'react-icons/fa'; // Font Awesome icons
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";


function UiuxDesign (){
    const navigate = useNavigate();
    return(<>
    <div className="mb-40">
        <Header/>

        <div className="mx-20">
            <h1 className="text-5xl font-bold text-left">UI/UX Design</h1>
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
                is a creative software company focused on delivering visually 
                compelling and<br/> user-friendly digital products. Our projects,
                 ranging from event platforms to e-commerce solutions,<br/> reflect a
                  commitment to intuitive and aesthetic design. Join our team to craft 
                  user-centered interfaces<br/> and enhance user experiences across a variety 
                  of innovative applications.


</p>

            <h1 className="text-xl font-bold text-left">Key Responsibilities</h1>
            <p className="py-3">
               <li>Design and create user-centered interfaces for web and mobile applications.</li>
               <li>Collaborate with developers and product managers to ensure a cohesive, engaging user experience.</li>
               <li>Conduct user research and testing to inform design decisions.</li>
               <li>Develop wireframes, mockups, and prototypes to communicate design concepts.</li>
               <li>Work with stakeholders to translate business goals into intuitive user flows and interaction models.</li>
               <li>Maintain a design system and ensure consistency in visual elements across projects.</li>
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
              <li>Professional growth opportunities and training resources.</li>
              <li>Flexible work hours with remote options.</li>
              <li>Collaborative and innovative team environment.</li>
              <li>Opportunities to work on unique and challenging projects with the latest design tools.</li>
            </p>
                    </div>
                
                    <div className="flex justify-center">
                <button className="text-xl border rounded-xl px-4 py-2 my-9 bg-blue-400 hover:bg-blue-500" onClick={() => navigate("/contactus")}>Apply for job</button>
            </div>

    </div>
    <Footer/>
    </>)
}
export default UiuxDesign;