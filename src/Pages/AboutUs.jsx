import LeaderShipTeam from "../Components/LeaderShipTeam";
import MilestoneAbout from "../Components/MilestoneAbout";
import TagLine2 from "../Components/TagLine/Content/TagLine2";
import Footer from "./Footer"
import Header from "./Header";

function AboutUs(){
    return (<>
    <Header/>
       <TagLine2/>
        <MilestoneAbout/>
        <LeaderShipTeam/>
        <Footer/>
    </>)
}
export default AboutUs;