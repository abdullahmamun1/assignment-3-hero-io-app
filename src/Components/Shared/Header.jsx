import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { Github } from "lucide-react";

const Header = () => {
  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/apps"}>Apps</NavLink>
      <NavLink to={"/installed"}>Installation</NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm px-2 md:px-5 lg:px-30">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          <div className="flex items-center gap-2">
            <img src={logo} className="w-8" alt="" />
            <h4 className="font-bold text-lg">HERO.IO</h4>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8 text-lg text-primary [&_.active]:underline [&_.active]:text-accent">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to={"https://github.com/abdullahmamun1"}
          className="btn btn-sm md:btn-lg"
        >
          <span>
            <Github />
          </span>
          Contribute
        </Link>
      </div>
    </div>
  );
};

export default Header;
