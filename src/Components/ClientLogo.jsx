import client1 from "../assets/client.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client1.png";

function ClientLogo() {
  return (
    <div className="my-16 mx-5 md:mx-10 lg:mx-20 overflow-hidden">
      <div className="flex space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-28 animate-scroll-left">
        <img
          src={client1}
          alt="Client 1"
          className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[150px] font-bold p-4 md:p-5 rounded-xl h-auto my-5"
        />
        <img
          src={client2}
          alt="Client 2"
          className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[150px] font-bold p-4 md:p-5 rounded-xl h-auto my-5"
        />
        <img
          src={client3}
          alt="Client 3"
          className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[150px] font-bold p-4 md:p-5 rounded-xl h-auto my-5"
        />
        <img
          src={client4}
          alt="Client 4"
          className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[150px] font-bold p-4 md:p-5 rounded-xl h-auto my-5"
        />
        <img
          src={client5}
          alt="Client 5"
          className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[150px] font-bold p-4 md:p-5 rounded-xl h-auto my-5"
        />
      </div>
    </div>
  );
}

export default ClientLogo;
