import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b-2 py-6 box-border">
      {/* Logo and Links */}
      <div className="flex gap-10 items-center font-semibold">
        <h1 className="text-lg font-bold">Tripster</h1>
        <ul className="flex gap-5 text-gray-600 text-sm">
          <li>Properties</li>
          <li>Attractions</li>
          <li>Popular</li>
        </ul>
      </div>

      {/* Authorization Buttons */}
      <div className="flex gap-5">
        <button className="border text-blue-500 border-blue-500 py-1 px-5 rounded-3xl">
          Sign up
        </button>
        <button className="bg-blue-500 text-white py-1 px-5 rounded-3xl">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
