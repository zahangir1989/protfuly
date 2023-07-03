import react from '../../../assets/image/react.svg'
const ReactPsd = () => {
    return (
      <div className="text-white flex items-center rounded justify-center flex-col px-5 pb-6 bg-[#152341]">
        <img className="w-4/5" src={react} alt="" />
        <h2 className="text-xl font-semibold my-3">React To HTML</h2>
        <p className="text-center">
          React uses an HTML-in-JavaScript syntax called JSX (JavaScript and
          XML)
        </p>
      </div>
    );
};

export default ReactPsd;