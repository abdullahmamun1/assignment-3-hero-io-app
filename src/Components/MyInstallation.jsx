import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import { useLoaderData } from "react-router";
import { getInstalledAppsID, removeInstalledApp } from "../localStorage";
import Swal from "sweetalert2";

const MyInstallation = () => {
  const apps = useLoaderData();
  const [installedIDs, setInstalledIDs] = useState(getInstalledAppsID);
  const [sortOrder, setSortOrder] = useState(null);
  const installedApps = apps.filter((app) => installedIDs.includes(app.id));
  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === "asc") return a.downloads - b.downloads;
    if (sortOrder === "desc") return b.downloads - a.downloads;
    return 0;
  });

  const handleUninstallApp = (id) => {
    Swal.fire({
      title: "Do you want to uninstall the app?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Uninstall",
    }).then((result) => {
      if (result.isConfirmed) {
        removeInstalledApp(id);
        setInstalledIDs(getInstalledAppsID());
        Swal.fire({
          title: "Uninstalled!",
          text: "App has been uninstalled.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="my-17.5 md:my-35 min-h-screen">
      <h1 className="text-5xl font-semibold text-center text-primary mb-2">
        Your Installed Apps
      </h1>
      <p className="text-secondary text-center mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex items-center justify-between py-5 px-5 md:px-10">
        <div>
          <h4 className="text-lg font-semibold">
            {sortedApps.length} Installed Apps
          </h4>
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            {sortOrder === "desc"
              ? "High-Low"
              : sortOrder === "asc"
                ? "Low-High"
                : "Sort By Downloads"}
            <span>
              <ChevronDown />
            </span>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a
                onClick={() => {
                  setSortOrder("desc");
                  document.activeElement.blur();
                }}
              >
                High-Low
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setSortOrder("asc");
                  document.activeElement.blur();
                }}
              >
                Low-High
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {sortedApps.map((app) => {
          const { id, title, image, downloads, ratingAvg, size } = app;
          return (
            <div
              key={id}
              className="bg-base-100 shadow-sm rounded-2xl flex flex-col md:flex-row items-center justify-between px-2 md:px-10 py-5 mx-2 md:mx-10"
            >
              <div className="flex gap-6">
                <img
                  className="w-30 h-30 object-cover object-top rounded-2xl"
                  src={image}
                  alt=""
                />
                <div className="flex justify-center items-center ">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{title}</h4>
                    <div className="flex space-x-4">
                      <p>
                        <img
                          src={downloadIcon}
                          alt="downloads"
                          className="inline w-5 h-5 mr-1 mb-0.5"
                        />
                        {new Intl.NumberFormat("en-us", {
                          notation: "compact",
                        }).format(downloads)}
                      </p>
                      <p>
                        <img
                          src={ratingIcon}
                          alt="downloads"
                          className="inline w-5 h-5 mr-1 mb-0.5"
                        />
                        {ratingAvg}
                      </p>
                      <p className="text-accent/70">{size} MB</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-auto mt-6 md:mt-0">
                <button
                  onClick={() => handleUninstallApp(id)}
                  className="btn btn-error  w-full"
                >
                  Uninstall
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyInstallation;
