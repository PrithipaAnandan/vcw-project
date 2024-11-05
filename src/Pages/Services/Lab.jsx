import TagLine4 from "../../Components/TagLine/Content/TagLine4";
import Header from "../Header";
import { PiCirclesFourBold } from "react-icons/pi";
import DiffLab from "./DiffLab";
import Footer from "../Footer";

function Lab() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            {/* Main Content */}
            <div className="flex-grow mb-40">
                <Header />
                <TagLine4 />

                <div className="h-[200px] my-28 overflow-hidden">
                    <div className="flex space-x-20 animate-scroll-left overflow-x-hidden">
                        <h1 className="text-5xl font-bold whitespace-nowrap max-w-full">
                            Scale your Engineering Team 5x Faster and 2x Cheaper 
                            <PiCirclesFourBold className="inline text-5xl text-blue-700 px-1" />
                        </h1>
                    </div>
                </div>

                <DiffLab />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Lab;
