import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="Header h-max md:h-[10%] lg:h-[10%]">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <i className="fa fa-fire text-3xl text-white mr-5"></i>
          <span className="font-semibold text-xl tracking-tight">
            Matthew Dacanay
          </span>
        </div>
        <div className="w-full block flex-grow md:flex md:items-center md:w-auto lg:flex lg:items-center lg:w-auto">
          <div className="text-sm md:flex-grow lg:flex-grow">
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              AboutMe
            </Link>
            <Link
              to="/portfolio"
              className="block mt-4 md:inline-block md:mt-0 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="block mt-4 md:inline-block md:mt-0 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Contact
            </Link>
          </div>
          <div>
            <Link
              to="/resume"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Resume
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
