import { FaEnvelope, FaLocationArrow, FaPhone} from "react-icons/fa";
import Container from "../../Shared/Container";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
      <Container>
        <div className="mx-14" id="Contact">
          <div>
            <h2 className="text-white text-3xl font-semibold text-center">
              Contact Details
            </h2>
            <hr className="w-[100px] border-2 my-2 bg-[#10AFAF] border-[#10AFAF] rounded-full h-1 mx-auto" />
          </div>
          <div className="md:flex items-center justify-between text-white my-9 mt-9">
            <div className="flex flex-col items-center justify-center text-center ">
              <p className="bg-[#10AFAF] p-3 rounded-full mb-5">
                <FaPhone size={30} />
              </p>
              <p>+8801917924444</p>
              <p>+8801771550606</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center ">
              <p className="bg-[#10AFAF] p-3 rounded-full mb-5">
                <FaLocationArrow size={30} />
              </p>
              <p>Aftabnagar, Rampura, Dhaka-1202, </p>
              <p>Bangladesh</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center ">
              <p className="bg-[#10AFAF] p-3 rounded-full mb-5">
                <FaEnvelope size={30} />
              </p>
              <p>alamzahangir218@gmail.com</p>
              <p>alamzahangir218@gmail.com</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </Container>
    );
};

export default Contact;