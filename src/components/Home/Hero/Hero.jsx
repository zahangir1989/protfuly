import Container from "../../Shared/Container";
import man from "../../../assets/image/download.svg";
import resume from '../../../assets/Zahangir_Alam_Resume.pdf'

const Hero = () => {
  return (
    <>
      <Container>
        <div className="min-h-screen">
          <div className="md:flex md:flex-row items-center justify-center">
            <div className="md:flex order-last items-center lg:w-1/2">
              <img className="md:w-full" src={man} alt="" />
            </div>
            <div className="flex flex-col lg:w-1/2">
              <h1 className="text-5xl leading-[60px] text-white font-bold mb-5">
                Hi, My name is{" "}
                <span className="text-[#10AFAF]"> Zahangir Alam</span>{" "}
                <span>BD</span> MERN Stack Developer From Bangladesh
              </h1>
              <a href={resume} download={"Zahangir_Alam_Resume"}>
                <button className="btn w-[200px] bg-[#10AFAF] border-none hover:bg-[#0cdfdf]">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
