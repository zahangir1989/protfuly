
import redux from '../../../assets/image/resux.svg'

const Redux = () => {
    return (
      <div className="text-white flex items-center rounded justify-center flex-col px-5 pb-6 bg-[#152341]">
        <img className="w-4/5" src={redux} alt="" />
        <h2 className="text-xl font-semibold my-3">Redux</h2>
        <p className="text-center">
          Redux is a popular Javascript library used to manage state in web
          applications.
        </p>
      </div>
    );
};

export default Redux;