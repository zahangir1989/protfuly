import about from '../../../assets/image/about.svg'
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Container from '../../Shared/Container';
const About = () => {
    return (
      <Container>
        <div className="pb-12 px-12" id="About">
          <div className="my-8 md:my-0">
            <h2 className="text-white text-3xl font-semibold text-center">
              About Me
            </h2>
            <hr className="w-[100px] border-2 my-2 bg-[#10AFAF] border-[#10AFAF] rounded-full h-1 mx-auto" />
          </div>
          <div className="md:flex items-center justify-center gap-5">
            <div className="md:w-1/2 mb-8">
              <img className="w-10/12" src={about} alt="" />
            </div>
            <div className="md:w-1/2">
              <p className="text-white">
                Hi, Im Zahangir Alam, a passionate self-taught programmer from
                Bangladesh. Basically I build several web application based on
                JavaScript. I tend to make use of modern web technologies to
                build websites that look great, feel fantastic, and catch users
                eye. I am especially focusing on ReactJS & NodeJS.
              </p>
              <div className="flex items-center justify-center text-white gap-5 mt-5">
                <FaGithub size={25} />
                <FaLinkedin size={25} />
                <FaEnvelope size={25} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default About;