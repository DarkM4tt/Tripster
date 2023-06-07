import { useState } from "react";
import Demo from "./components/Demo";
import Description from "./components/Description";
import Navbar from "./components/Navbar";
import PropertyOverview from "./components/PropertyOverview";
import Rooms from "./components/Rooms";
import Ratings from "./components/Ratings";
import Reviews from "./components/Reviews";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="px-10">
      <Navbar />
      <Demo />
      <Description />

      <div className="mt-4">
        <div className="flex border-b-2 gap-10 tab-container cursor-pointer font-semibold text-gray-500 text-sm ">
          <div
            className={`tab ${
              activeTab === 0
                ? "text-blue-600 font-bold border-b-2 pb-1 border-blue-600"
                : ""
            }`}
            onClick={() => handleTabClick(0)}
          >
            Overview
          </div>
          <div
            className={`tab ${
              activeTab === 1
                ? "text-blue-600 font-bold border-b-2 pb-1 border-blue-600"
                : ""
            }`}
            onClick={() => handleTabClick(1)}
          >
            Rooms
          </div>
          <div
            className={`tab ${
              activeTab === 2
                ? "text-blue-600 font-bold border-b-2 pb-1 border-blue-600"
                : ""
            }`}
            onClick={() => handleTabClick(2)}
          >
            Amenities
          </div>
          <div
            className={`tab ${
              activeTab === 3
                ? "text-blue-600 font-bold border-b-2 pb-1 border-blue-600"
                : ""
            }`}
            onClick={() => handleTabClick(3)}
          >
            Policies
          </div>
        </div>
        <div className="content-container mt-3">
          {activeTab === 0 && (
            <div>
              <PropertyOverview />
            </div>
          )}
          {activeTab === 1 && <div>Rooms</div>}
          {activeTab === 2 && <div>Amenities</div>}
          {activeTab === 3 && <div>Policies</div>}
        </div>
      </div>

      <Rooms />
      <div className="flex">
        <h1>Reviews</h1>
        <Ratings />
        <Reviews />
      </div>
    </div>
  );
}

export default App;
