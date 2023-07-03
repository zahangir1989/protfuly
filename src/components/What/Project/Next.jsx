import next from '../../../assets/image/next.svg'
const Next = () => {
    return (
      <div className="text-white flex items-center rounded justify-center flex-col px-5 pb-6 bg-[#152341]">
        <img className="w-4/5" src={next} alt="" />
        <h2 className="text-xl font-semibold my-3">Next Js</h2>
        <p className="text-center">
          Next.js is a flexible React framework that gives you building blocks
          to create fast web applications.
        </p>
      </div>
    );
};

export default Next;