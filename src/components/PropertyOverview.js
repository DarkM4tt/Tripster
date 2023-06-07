import React from "react";
import { BiWifi } from "react-icons/bi";
import { TbAirConditioning } from "react-icons/tb";
import { FaBath, FaParking } from "react-icons/fa";
import { BsPersonVcardFill, BsFillClockFill } from "react-icons/bs";

const PropertyOverview = () => {
  return (
    <>
      <div className="flex justify-between pb-3">
        <div className="space-y-2">
          <h1 className="font-bold">Property overview</h1>
          <div className="flex text-sm font-semibold text-gray-700 gap-14">
            <ul className="space-y-2">
              <li className="flex gap-4 items-center">
                <BiWifi className="inline" />
                Free Wifi
              </li>
              <li className="flex gap-4 items-center">
                <TbAirConditioning className="inline" /> Air Conditioning
              </li>
              <li className="flex gap-4 items-center">
                <FaBath className="inline" /> Private bathroom
              </li>
              <li className="flex gap-4 items-center">
                <BsPersonVcardFill className="inline" /> Key card access
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex gap-4 items-center">
                <FaParking className="inline" />
                Free parking
              </li>
              <li className="flex gap-4 items-center">
                <BsFillClockFill className="inline" /> 24-hour front desk
              </li>
            </ul>
          </div>
        </div>

        <div className="w-72 h-40">
          <img
            className="w-full h-full rounded-3xl"
            src="./assets/map.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default PropertyOverview;
