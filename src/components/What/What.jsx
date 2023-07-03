import Container from "../Shared/Container";
import Mern from "./Project/Mern";
import Next from "./Project/Next";
import ReactPsd from "./Project/ReactPsd";
import Redux from "./Project/Redux";
import Web from "./Project/Web";
import Responsive from "./Project/responsive";

const What = () => {
    return (
      <>
        <Container>
          <div>
            <h2 className="text-white text-3xl font-semibold text-center">
              What I Do
            </h2>
            <hr className="w-[100px] border-2 my-2 bg-[#10AFAF] border-[#10AFAF] rounded-full h-1 mx-auto" />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 my-10">
            <ReactPsd />
            <Web />
            <Responsive />
            <Mern />
            <Redux/>
            <Next/>
          </div>
        </Container>
      </>
    );
};

export default What;