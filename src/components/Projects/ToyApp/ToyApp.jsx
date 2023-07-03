import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import toy from "../../../assets/image/toy.png"
import { Link } from "react-router-dom";
const ToyApp = () => {
  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-7 place-content-center px-9 mt-5">
        <div className="bg-[#152341] px-8 py-10 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Kids Store</h2>
          <p>
            Easybank Is A Challenge From Frontend Mentor.This Is A Website For A
            Digital Banking. Here I Build A Awesome Layout For All Kinds Of
            Devices. Everytime I Try To Build Those Things Which Are Fit To
            Screen All Types Of Devices.
          </p>
          <div className="flex mt-8 items-center justify-between">
            <div className="flex items-center gap-3 ">
              <Link
                to={"https://toy-app-175e3.web.app/"}
                className="btn btn-sm bg-[#10AFAF] border-none "
              >
                Live Demo
              </Link>
              <Link to={"https://github.com/DavRahim/toy-clint11"}>

              <p className="btn rounded-full btn-sm bg-[#10AFAF] border-none">
                <FaGithub size={18} />
              </p>
              </Link>
            </div>
            <div className="flex items-center gap-4 text-[#10AFAF]">
              <FaReact size={18} />
              <FaNodeJs size={18} />
              <SiExpress size={18} />
              <SiMongodb size={18} />
            </div>
          </div>
        </div>
        <div className="p-10 m-5 bg-[#152341] rounded-lg">
          <img className="max-w-full h-full" src={toy} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ToyApp;
