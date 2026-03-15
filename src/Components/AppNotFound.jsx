import React from "react";
import { Link, useNavigate } from "react-router";
import noAppFoundImage from "../assets/App-Error.png";

const AppNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center my-17.5 md:my-35">
      <img src={noAppFoundImage} alt="" />
      <h1 className="text-5xl font-semibold text-center text-primary mb-2 mt-12">
        OPPS!! APP NOT FOUND
      </h1>
      <p className="text-secondary text-center mb-6">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <button onClick={() => navigate(-1)} className="btn btn-lg">
        Go Back!
      </button>
    </div>
  );
};

export default AppNotFound;
