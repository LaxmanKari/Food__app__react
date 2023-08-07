const Shimmer = () => {
  return (
    <div className="flex">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="w-56 h-56 p-5 m-2 shadow-lg bg-gray-50" key={index}> </div>
        ))}
    </div>
  );
};

export default Shimmer;
