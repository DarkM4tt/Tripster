import React from "react";

const Progress = ({ tag, fill }) => {
  return (
    <div className="flex flex-col">
      <div className="flex text-gray-600 justify-between text-xs">
        <p>{tag}</p>
        <p>{fill}/10</p>
      </div>
      <div className="w-full h-1 bg-gray-300">
        <div
          className="bg-blue-600 h-1"
          style={{ width: `${fill * 10}%` }}
        ></div>
      </div>
    </div>
  );
};

const Ratings = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-blue-500 text-xl font-semibold">9.6/10</h1>
      <div className="flex flex-col mt-6 gap-6">
        <Progress tag="Cleanliness" fill={10} />
        <Progress tag="Amenities" fill={7} />
        <Progress tag="Location" fill={9} />
      </div>
    </div>
  );
};

export default Ratings;
