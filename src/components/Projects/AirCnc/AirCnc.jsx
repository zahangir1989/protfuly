import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import airCNC from '../../../assets/image/airCNC.png'
import { Link } from "react-router-dom";
const AirCnc = () => {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-7 place-content-center px-9 mt-5">
        <div className="bg-[#152341] px-8 py-10 w-full my-auto rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Air CNC</h2>
          <p>
            This room is used for front end React, and React npm. and used for
            the back end Node , Express, and used as a database MongoDB, And API
            has been used for security JWT token, and as a payment method Stripe
            . From where a buyer can make payment through Visa and MasterCard.
            <br />
            Technologies : React, Express, MongoDB Crud, Operation , Rest API,
            JWT React Spinner, Stripe, Firebase, React Query, Axios, React Date
            picker.
          </p>
          <div className="flex mt-8 items-center justify-between">
            <div className="flex items-center gap-3 ">
              <Link
                to={"https://aircnc-a7815.web.app/"}
                className="btn btn-sm bg-[#10AFAF] border-none "
              >
                Live Demo
              </Link>
              <Link to={"https://github.com/DavRahim/airCNC-client"}>
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
          <img className="max-w-full h-full" src={airCNC} alt="" />
        </div>
      </div>
    </>
  );
};

export default AirCnc;
