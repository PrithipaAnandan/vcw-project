import supersolution from "../assets/supersourcing.png"
import sedin from "../assets/Sedin.png"
import client1 from "../assets/client1 (1).png"
function ClientLogo() {
  return (
    <div className="my-16 mx-5 md:mx-10 lg:mx-20 overflow-hidden h-[200px]">
      <div className="flex space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-28 animate-scroll-left">
        <img
          src={client1}
          alt="Client 1"
          className="w-[200px] h-[150px] object-contain my-5"
        />
        <img
          src={sedin}
          alt="Client 2"
          className="w-[200px] h-[150px] object-contain my-5"
        />
        <img
          src={supersolution}
          alt="Client 3"
          className="w-[200px] h-[150px] object-contain my-5"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ2QoSMVESakd2tZp5YG9Kr6CsDXve7duIhA&s"
          alt="Client 4"
          className="w-[200px] h-[150px] object-contain my-5"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0znny9Gq__GTR-H6sxuuoE1_oCK9mFpY1kA&s"
          alt="Client 5"
          className="w-[200px] h-[150px] object-contain my-5"
        />
        <img
          src={client1}
          alt="Client 1"
          className="w-[200px] h-[150px] object-contain my-5"
        />
        <img
          src={sedin}
          alt="Client 2"
          className="w-[200px] h-[150px] object-contain my-5"
        />
        <img
          src={supersolution}
          alt="Client 3"
          className="w-[200px] h-[150px] object-contain my-5"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ2QoSMVESakd2tZp5YG9Kr6CsDXve7duIhA&s"
          alt="Client 4"
          className="w-[200px] h-[150px] object-contain my-5"
        />
      </div>
    </div>
  );
}

export default ClientLogo;
