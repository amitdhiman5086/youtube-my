const Shimmer = () => {
  return (
    <div className="flex flex-wrap ">
      {Array(30)
        .fill("")
        .map((e, index) => (
          <div key={index}>
            <div className="p-2 m-2 w-60 h-80 shadow-md">
              <div className="p-2 m-2 rounded-md w-[224px] h-[156px] bg-gray-500 animate-pulse"></div>
              <ul>
                <li className="w-[180px] h-3 p-2 mx-2 my-3  rounded-md bg-gray-500 animate-pulse"></li>
                <li className="w-[100px] h-3 p-2 mx-2  my-3 rounded-md bg-gray-500 animate-pulse"></li>
                <li className="w-[60px] h-3 p-2 mx-2  my-3 rounded-md bg-gray-500 animate-pulse"></li>
              </ul>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
