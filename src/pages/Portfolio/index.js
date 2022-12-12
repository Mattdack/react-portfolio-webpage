import React from "react";

import Blog from "../../assets/images/blog.jpg";
import Econ from "../../assets/images/E-commerce.jpg";
import Gloomhaven from "../../assets/images/Gloomhaven.jpg";
import Hiking from "../../assets/images/Hiking.jpg";
import Social from "../../assets/images/social-media.jpg";
import weather from "../../assets/images/weather.jpg";

function Portfolio() {
  return (
    <div className="Portfolio bg-teal-500 backgroundImage h-[82.5%]  border-y-4 border-white overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place content-center my-4">
        <div
          className="group bg-slate-500 sm:h-48 md:h-52 hover:h-56 sm:w-80 md:w-96 hover:w-128  my-8 border-4 border-slate-300 rounded-md shadow-lg shadow-black"
          style={{
            backgroundImage: `url(${Blog})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-slate-300/70 w-max">
            <a
              href="https://github.com/Mattdack/tech-blog"
              target="_blank"
              rel="noreferrer"
              className="inline-block mx-2"
            >
              <i className="fa fa-github text-3xl text-white"></i>
            </a>
            <a
              href="https://tech-blog-dacanay.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-block mx-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                />
              </svg>
            </a>
            <p className="inline-block">Tech-Blog</p>
          </div>
        </div>

        <div
          className="bg-slate-500 sm:h-48 md:h-52 hover:h-56 sm:w-80 md:w-96 hover:w-128  my-8 border-4 border-slate-300 rounded-md shadow-lg shadow-black"
          style={{
            backgroundImage: `url(${Gloomhaven})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div
          className="bg-slate-500 sm:h-48 md:h-52 hover:h-56 sm:w-80 md:w-96 hover:w-128  my-8 border-4 border-slate-300 rounded-md shadow-lg shadow-black"
          style={{
            backgroundImage: `url(${Econ})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div
          className="bg-slate-500 sm:h-48 md:h-52 hover:h-56 sm:w-80 md:w-96 hover:w-128  my-8 border-4 border-slate-300 rounded-md shadow-lg shadow-black"
          style={{
            backgroundImage: `url(${Social})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div
          className="bg-slate-500 sm:h-48 md:h-52 hover:h-56 sm:w-80 md:w-96  hover:w-128 my-8 border-4 border-slate-300 rounded-md shadow-lg shadow-black"
          style={{
            backgroundImage: `url(${Hiking})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div
          className="bg-slate-500 sm:h-48 md:h-52 hover:h-56 sm:w-80 md:w-96  hover:w-128 my-8 border-4 border-slate-300 rounded-md shadow-lg shadow-black"
          style={{
            backgroundImage: `url(${weather})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Portfolio;
