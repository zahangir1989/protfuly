import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
// import music from "../../../assets/image/music1.png";
import music from "../../../assets/image/music1.png"
import { Link } from "react-router-dom";
const Music = () => {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-7 place-content-center px-9">
        <div className="bg-[#152341] px-8 py-10 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Musicine</h2>
          <p>
            The website was built using React.js and React Query for
            client-side, For the backend, Node.js and Express were used, along
            with MongoDB for the database. Here three dashboards are used one
            for instructor, other admin and one for student. Stripe is used for
            payment here. From here students can use payment to purchase classes
          </p>
          <div className="flex mt-8 items-center justify-between">
            <div className="flex items-center gap-3 ">
              <Link
                to={"https://music-86f87.web.app/"}
                className="btn btn-sm bg-[#10AFAF] border-none "
              >
                Live Demo
              </Link>
              <Link to={"https://github.com/DavRahim/music-clint12"}>

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
          <img className="max-w-full h-full" src={music} alt="" />
        </div>
      </div>
    </>
  );
};

export default Music;
