// import {  FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
// import { SiExpress, SiMongodb } from "react-icons/si";
// import music from "../../assets/image/music1.png"
import Container from "../Shared/Container";
import AirCnc from "./AirCnc/AirCnc";
import Music from "./Music/Music";
import ToyApp from "./ToyApp/ToyApp";

const Project = () => {
    return (
      <Container>
        <div id="Project">
          <div>
            <h2 className="text-white text-3xl font-semibold text-center">
              Side Projects
            </h2>
            <hr className="w-[100px] border-2 my-2 bg-[#10AFAF] border-[#10AFAF] rounded-full h-1 mx-auto" />
          </div>
          <div className="text-white my-10 px-10 w-full mx-auto">
            <Music/>
           <AirCnc/>
           <ToyApp/>
          </div>
        </div>
      </Container>
    );
};

export default Project;