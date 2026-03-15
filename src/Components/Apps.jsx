import React from "react";
import { useLoaderData } from "react-router";
import AppCard from "./AppCard";

const Apps = () => {
  const apps = useLoaderData();
  return (
    <div className="my-17.5 lg:my-35 min-h-screen">
      <h1 className="text-5xl font-semibold text-center text-primary mb-2">
        Our All Applications
      </h1>
      <p className="text-secondary text-center mb-10 mx-5">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex flex-col gap-5 md:flex-row items-center justify-between py-5 px-10">
        <div>
          <h4 className="text-xl font-semibold">({apps.length}) Apps Found</h4>
        </div>
        <div className="">
          <label className="lg:w-87.5 input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search Apps" />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-10">
        {apps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
