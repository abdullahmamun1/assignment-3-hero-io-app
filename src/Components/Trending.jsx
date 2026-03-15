import { Download, Star } from "lucide-react";
import React from "react";
import AppCard from "./AppCard";

const Trending = ({ apps }) => {
  console.log(apps);
  return (
    <div className="my-17.5 md:my-35">
      <h1 className="text-5xl font-semibold text-center text-primary mb-2">
        Trending Apps
      </h1>
      <p className="text-secondary text-center mb-6">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
        {apps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default Trending;
