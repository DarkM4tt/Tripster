import React from "react";
import { BiArea } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaBed } from "react-icons/fa";

const Card = ({ heading, source, area, people, elements, rate }) => {
  return (
    <div className="bg-white rounded-xl p-2">
      <img className="w-80 h-28 rounded-xl" src={source} alt="" />
      <h1 className="font-semibold mt-2">{heading}</h1>
      <div className="flex gap-2 mt-2">
        <BiArea />
        <span className="text-xs">{area} sqm</span>
      </div>
      <div className="flex gap-2">
        <BsFillPeopleFill />
        <span className="text-xs">{people} people</span>
      </div>
      <div className="flex gap-2 mb-2">
        <FaBed />
        <span className="text-xs">{elements}</span>
      </div>
      <p className="font-semibold text-gray-400 mb-2">
        Non-refundable, Breakfast included
      </p>
      <button className="w-full rounded-xl bg-blue-600 text-white">
        Book now for ${rate}
      </button>
    </div>
  );
};

const Rooms = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-xl">
      <h1 className="font-bold mb-3 ml-5">Rooms</h1>
      <div className="flex w-full gap-4 rounded-xl px-5">
        <Card
          source="./assets/flat1.jpg"
          heading="Double standard room"
          area="16"
          people="2"
          elements="1 queen bed or 2 separate beds"
          rate="180"
        />
        <Card
          source="./assets/flat2.jpg"
          heading="Comfort single room"
          area="16"
          people="2"
          elements="1 king size bed"
          rate="220"
        />
        <Card
          source="./assets/flat3.jpg"
          heading="Double standard room"
          area="16"
          people="2"
          elements="1 king size bed"
          rate="250"
        />
        <Card
          source="./assets/flat4.jpg"
          heading="Double fancy room"
          area="16"
          people="2"
          elements="1 king size bed and couch"
          rate="280"
        />
      </div>
    </div>
  );
};

export default Rooms;
