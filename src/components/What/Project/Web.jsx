import web from "../../../assets/image/web.svg"
const Web = () => {
    return (
      <div className="text-white flex items-center rounded justify-center flex-col px-5 pb-6 bg-[#152341]">
        <img className="w-4/5" src={web} alt="" />
        <h2 className="text-xl font-semibold my-3">Web Development</h2>
        <p className="text-center">
          Web development, also known as website development, refers to the
          tasks associated with creating, building, and maintaining websites and
          web applications that run online on a browser. It may, however, also
          include web design, web programming, and database management.
        </p>
      </div>
    );
};

export default Web;