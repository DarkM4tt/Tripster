import React from "react";

const Description = () => {
  return (
    <div className="flex justify-between mt-6">
      <div className="flex flex-col">
        <h1 className="font-bold text-lg">Hotel Norrebro</h1>
        <p className="text-xs text-gray-700">
          3-star hotel located in the heart of Copenhagen
        </p>
      </div>
      <div className="flex gap-5 items-center">
        <div className="flex flex-col">
          <h1 className="text-green-500 font-bold">Excellent</h1>
          <p className="text-xs text-gray-700">1920 reviews</p>
        </div>
        <button className="text-green-500 px-4 py-1 font-semibold bg-green-200 rounded-3xl">
          9.5
        </button>
      </div>
    </div>
  );
};

export default Description;
