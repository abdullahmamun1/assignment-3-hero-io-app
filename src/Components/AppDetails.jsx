import React, { useState } from "react";
import { useLoaderData } from "react-router";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import Swal from "sweetalert2";
import { addInstalledApp, isInstalledApp } from "../localStorage";

const AppDetails = () => {
  const singleApp = useLoaderData();

  const {
    id,
    image,
    title,
    description,
    downloads,
    reviews,
    companyName,
    size,
    ratingAvg,
    ratings,
  } = singleApp;
  const [isInstalled, setIsInstalled] = useState(isInstalledApp(id));

  const handleInstall = () => {
    setIsInstalled(true);
    Swal.fire({
      title: "Awesome!",
      text: "You succesfully installed the app!",
      icon: "success",
    });
    addInstalledApp(id);
  };

  const barData = ratings
    .toReversed()
    .map((r) => ({ name: r.name, count: r.count }));

  return (
    <div className="min-h-screen my-17.5 lg:my-35 px-5 xl:px-30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-5">
        <div>
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={image}
            alt=""
          />
        </div>
        <div className="flex items-center">
          <div className="flex flex-col justify-around w-full">
            <div className="my-8">
              <h3 className="text-4xl font-semibold mb-2">{title}</h3>
              <p className="text-lg mb-4 text-base-content/50">
                Developed by{" "}
                <span className="text-neutral underline">{companyName}</span>
              </p>
              <button
                onClick={handleInstall}
                className={
                  isInstalled
                    ? "btn btn-disabled btn-lg transition-all duration-300"
                    : "btn btn-success btn-lg"
                }
              >
                {isInstalled ? "Installed" : `Install Now (${size} MB)`}
              </button>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex flex-col md:flex-row lg:mt-10 justify-between items-center gap-10 w-full h-full rounded-box px-10 py-5 bg-base-200">
                <div className="flex flex-col items-center">
                  <img src={downloadIcon} className="mb-2" alt="" />
                  <div className="stat-title">Downloads</div>
                  <div className="stat-value">
                    {new Intl.NumberFormat("en-us", {
                      notation: "compact",
                    }).format(downloads)}
                  </div>
                </div>

                <div className="flex flex-col items-center ">
                  <img src={ratingIcon} className="mb-2" alt="" />
                  <div className="stat-title">Average Ratings</div>
                  <div className="stat-value">{ratingAvg}</div>
                </div>

                <div className=" flex flex-col items-center">
                  <img src={reviewIcon} className="mb-2" alt="" />
                  <div className="stat-title">Total Reviews</div>
                  <div className="stat-value">
                    {new Intl.NumberFormat("en-us", {
                      notation: "compact",
                    }).format(reviews)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-10" />
      <div className="py-20">
        <h4 className="text-2xl font-medium mb-10">Rating</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
            <XAxis type="number"></XAxis>
            <YAxis type="category" dataKey={"name"}></YAxis>
            <Bar dataKey="count" fill="#d6861e"></Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <hr />
      <div className="py-20">
        <h4 className="text-2xl font-medium mb-10">Description</h4>
        <p className="text-base-content/50 leading-relaxed tracking-wide">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
