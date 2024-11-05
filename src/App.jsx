import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Example from './Pages/Example';
import Testmonial from './Components/Testimonial';
import ClientLogo from './Components/ClientLogo';
import TagLIne1 from './Components/TagLine/Content/TagLIne1';
import Footer from './Pages/Footer';
import AboutUs from './Pages/AboutUs';
import TagLine2 from './Components/TagLine/Content/TagLine2';
import MilestoneAbout from './Components/MilestoneAbout';
import LeaderShipTeam from './Components/LeaderShipTeam';
import Hire from './Pages/Services/Hire';
import Header from './Pages/Header';
import MotionHire from './Components/ServiceHire/MotionHire';
import Calendar from './Components/ServiceHire/Calender';
import TagLine4 from './Components/TagLine/Content/TagLine4';
import Lab from './Pages/Services/Lab';
import Careers from './Pages/Careers';
import TagLine5 from './Components/TagLine/Content/TagLine5';
import Fullstack from './Pages/Apply Jobs/Fullstack';
import Backend from './Pages/Apply Jobs/Backend';
import UiuxDesign from './Pages/Apply Jobs/UiuxDesign';
import ManualTesting from './Pages/Apply Jobs/ManualTesting';
import PartTime from './Pages/Apply Jobs/PartTime';
import Frontend from './Pages/Apply Jobs/Frontend';
import Mobile from './Pages/Apply Jobs/Mobile';
import Portfolio from './Pages/Portfolio';
import TagLine6 from './Components/TagLine/Content/TagLine6';
import ContactUs from './Pages/ContactUs';
import TagLine7 from './Components/TagLine/Content/TagLine7';
import Sop from './Pages/Sop';
import TagLine3 from './Components/TagLine/Content/TagLine3';
import DiffLab from './Pages/Services/DiffLab';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/example' element={<Example />} />
        <Route path='/testmonial' element={<Testmonial />} />
        <Route path='/clientlogo' element={<ClientLogo />} />
        <Route path='/tagline1' element={<TagLIne1 />} />
        <Route path='footer' element={<Footer/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/tagline2' element={<TagLine2/>}/>
        <Route path='/milestoneabout' element={<MilestoneAbout/>}/>
        <Route path='/leadershipteam' element={<LeaderShipTeam/>}/>
        <Route path='/hire' element={<Hire/>}/>
        <Route path='/lab' element={<Lab/>}/>
        <Route path='/header' element={<Header/>}/>
        <Route path='/motionhire' element={<MotionHire/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
        <Route path='/tagline4' element={<TagLine4/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/tagline5' element={<TagLine5/>}/>
        <Route path='/fullstack' element={<Fullstack/>}/>
        <Route path='/backend' element={<Backend/>}/>
        <Route path='/uiuxdesign' element={<UiuxDesign/>}/>
        <Route path='/manualtesting' element={<ManualTesting/>}/>
        <Route path='/parttime' element={<PartTime/>}/>
        <Route path='/frontend' element={<Frontend/>}/>
        <Route path='/mobile' element={<Mobile/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/tagline6' element={<TagLine6/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/tagline7' element={<TagLine7/>}/>
        <Route path='/sop' element={<Sop/>}/>
        <Route path='/tagline3' element={<TagLine3/>}/>
        <Route path='/difflab' element={<DiffLab/>}/>
      </Routes>
    </Router>
  );
}

export default App;