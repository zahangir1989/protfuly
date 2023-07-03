
const Pagination = ({tach, per}) => {
  return (
    <>
      <div className="w-1/2 my-2">
        <div className="flex items-center justify-between">
          <h4 className="text-white">{tach}</h4>
          <h4 className="text-white">{per}%</h4>
        </div>
        <progress
          className="progress progress-info w-full"
          value={per}
          max="100"
        ></progress>
      </div>
    </>
  );
};

export default Pagination;