import responsive from "../../../assets/image/responsive.svg"
const Responsive = () => {
    return (
      <div className="text-white flex items-center rounded justify-center flex-col px-5 pb-6 bg-[#152341]">
        <img className="w-4/5" src={responsive} alt="" />
        <h2 className="text-xl font-semibold my-3">Responsive Design</h2>
        <p className="text-center">
          Responsive web design is about creating web pages that look good on
          all devices! A responsive web design will automatically adjust for
          different screen size
        </p>
      </div>
    );
};

export default Responsive;