import React from "react";

const Reviews = () => {
  return (
    <div className="flex justify-between border-b-2 pb-5">
      <div>
        <h1 className="font-bold">Excellent value for the price!</h1>
        <p className="text-gray-400 text-xs font-semibold">Mark M.</p>
        <p className="text-sm text-gray-700 font-semibold mt-1">
          We enjoyed our stay at this hotel. We will definitely come back!
        </p>
        <ul className="text-xs mt-2">
          <li>
            <span className="text-green-500 font-semibold text-xl">+</span>
            Create location!
          </li>
          <li>
            <span className="text-green-500 font-semibold text-xl">+</span>
            Service
          </li>
          <li>
            <span className="text-green-500 font-semibold text-xl">+</span>
            Bottle of champagne in the room!
          </li>
        </ul>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <p className="font-bold text-green-600">Excellent</p>
          <button className="text-green-600 bg-green-200 font-bold px-4 py-1 rounded-xl">
            10
          </button>
        </div>
        <div className="flex flex-col items-end justify-end h-full text-xs text-gray-700">
          <p>Reviewed on</p>
          <p>20 September 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
