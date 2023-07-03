import mern from "../../../assets/image/mern.svg"
const Mern = () => {
    return (
      <div className="text-white flex items-center justify-center flex-col rounded px-5 pb-6 bg-[#152341]">
        <img className="w-4/5" src={mern} alt="" />
        <h2 className="text-xl font-semibold my-3">MERN Stack Development</h2>
        <p className="text-center">
          MERN stands for MongoDB, Express, React, Node, after the four key
          technologies that make up the stack. ... Express and Node make up the
          middle (application) tier.
        </p>
      </div>
    );
};

export default Mern;