import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

function PartTime (){
    const navigate =useNavigate();
    return (<>
    <div className="mb-40">
        <Header/>

        <div className="mx-20">
            <h1 className="text-5xl ">Current Openings</h1>
            <p className="mx-9 py-3">  We're always on the lookout for the ideal talent. See if you are the right fit.</p>
        </div>

        <div className="mx-20 py-10 grid grid-cols-2 gap-9 cursor-pointer">
            <div className="border rounded-xl py-16 bg-blue-400" onClick={()=> navigate("/careers")}>
            <button className="font-bold text-xl items-center text-center w-full">Opening Jobs<br/></button>
                <h1 className="pl-3 pt-5"><span className="ml-3">"Join</span> our innovative team at Vcode Wonder! We`re seeking talented individuals ready
                     to make a real impact in tech—explore opportunities to grow with us."</h1>
            </div>
            
            <div className="border rounded-xl py-16 bg-blue-400 " onClick={()=> navigate("/contactus")}>
            <button  className="font-bold text-xl items-center text-center w-full">Internship <br/></button>
            <h1 className="pl-3 pt-5"><span className="ml-3">"Kickstart</span> your career with an internship at Vcode Wonder! Gain hands-on
                 experience and learn from industry experts in a dynamic tech environment."
            </h1> 
            </div>
        </div>
    </div>
    <Footer/>
    </>)
}
export default PartTime;