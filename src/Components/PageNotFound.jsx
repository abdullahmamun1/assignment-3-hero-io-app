import React from "react";
import { Link, useNavigate } from "react-router";
import _404Image from "../assets/error-404.png";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center my-17.5 md:my-35">
      <img src={_404Image} alt="" />
      <h1 className="text-5xl font-semibold text-center text-primary mb-2 mt-12">
        Oops, page not found!
      </h1>
      <p className="text-secondary text-center mb-6">
        The page you are looking for is not available.
      </p>
      <button onClick={() => navigate(-1)} className="btn btn-lg">
        Go Back!
      </button>
    </div>
  );
};

export default PageNotFound;
