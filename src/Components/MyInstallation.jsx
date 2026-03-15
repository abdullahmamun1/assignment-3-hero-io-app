import { ChevronDown } from "lucide-react";
import React from "react";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import image from "../assets/demo-app (1).webp";

const MyInstallation = () => {
  return (
    <div className="my-17.5 md:my-35 min-h-screen">
      <h1 className="text-5xl font-semibold text-center text-primary mb-2">
        Your Installed Apps
      </h1>
      <p className="text-secondary text-center mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex items-center justify-between py-5 px-10">
        <div>
          <h4 className="text-xl font-semibold">Apps Found</h4>
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By Size
            <span>
              <ChevronDown />
            </span>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>High-Low</a>
            </li>
            <li>
              <a>Low-High</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-base-100 shadow-sm rounded-2xl flex items-center justify-between px-10 py-5 mx-10">
          <div className="flex gap-6">
            <img className="w-30 rounded-2xl" src={image} alt="" />
            <div className="flex justify-center items-center ">
              <div>
                <h4 className="text-xl font-semibold mb-2">
                  Forest: Focus for Productivity
                </h4>
                <div className="flex space-x-4">
                  <p>
                    <img
                      src={downloadIcon}
                      alt="downloads"
                      className="inline w-5 h-5 mr-1 mb-0.5"
                    />
                    1,200
                  </p>
                  <p>
                    <img
                      src={ratingIcon}
                      alt="downloads"
                      className="inline w-5 h-5 mr-1 mb-0.5"
                    />
                    4.2
                  </p>
                  <p className="text-accent/70">250 MB</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="btn btn-error">Uninstall</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInstallation;
