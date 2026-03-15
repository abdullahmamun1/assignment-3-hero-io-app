import { Download, Star } from "lucide-react";
import React from "react";
import AppCard from "./AppCard";
import { Link } from "react-router";

const Trending = ({ apps = [] }) => {
  return (
    <div className="my-17.5 lg:my-35">
      <h1 className="text-5xl font-semibold text-center text-primary mb-2">
        Trending Apps
      </h1>
      <p className="text-secondary text-center mb-6">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-10">
        {apps.slice(0, 8).map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
      <div className=" mt-12 flex justify-center">
        <Link className="btn btn-lg" to="/apps">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Trending;
