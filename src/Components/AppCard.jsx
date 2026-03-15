import { Download, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { id, image, title, downloads, ratingAvg } = app;
  return (
    <Link to={`/apps/${id}`} className="bg-base-200 shadow-md p-4 rounded-box">
      <img
        className="rounded-box h-80 object-cover object-top w-full"
        src={image}
        alt=""
      />
      <h3 className="text-xl my-4 font-medium ml-1">{title}</h3>
      <div className="flex justify-between ">
        <div className="badge badge-soft badge-success p-4">
          <span>
            <Download />
          </span>
          <p>
            {new Intl.NumberFormat("en-us", {
              notation: "compact",
            }).format(downloads)}
          </p>
        </div>
        <div className="badge badge-warning p-4 ">
          <span>
            <Star />
          </span>
          <p>{ratingAvg}</p>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
