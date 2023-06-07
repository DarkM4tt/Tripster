import React from "react";

const Demo = () => {
  return (
    <div className="flex h-64 gap-5 mt-5">
      <div className="flex-1">
        <img
          className="w-full h-full rounded-3xl"
          src="./assets/flat5.jpg"
          alt=""
        />
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex h-[50%] gap-2">
          <img
            className="rounded-3xl w-[50%]"
            src="./assets/flat1.jpg"
            alt=""
          />
          <img
            className="rounded-3xl w-[50%]"
            src="./assets/flat2.jpg"
            alt=""
          />
        </div>
        <div className="flex h-[50%] gap-2">
          <img
            className="rounded-3xl w-[50%]"
            src="./assets/flat3.jpg"
            alt=""
          />
          <img
            className="rounded-3xl w-[50%]"
            src="./assets/flat4.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Demo;
