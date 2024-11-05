import Calendar from "../../Components/ServiceHire/Calender";
import MotionHire from "../../Components/ServiceHire/MotionHire";
import TagLine3 from "../../Components/TagLine/Content/TagLine3";
import Header from "../Header";
import Footer from "../Footer";
function Hire () {
    return (<>
    <div className="mb-40">
    <Header/>
    <TagLine3/>
    <MotionHire/>  
    <Calendar/>
    </div>
    <Footer/>
    </>)
}
export default Hire;