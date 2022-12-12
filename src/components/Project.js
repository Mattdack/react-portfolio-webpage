import React from "react";

function Project(props) {
    return (
        <div
        className="group bg-slate-500 h-48 md:h-52 hover:h-56 w-80 md:w-96 hover:w-128 transition-width duration-1000 my-8 border-4 border-slate-300 rounded-md shadow-lg shadow-black"
        style={{
          backgroundImage: `url(${props.Image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-slate-400/80 w-max align-middle invisible group-hover:visible rounded-md">
          <a
            href={props.Github}
            target="_blank"
            rel="noreferrer"
            className="inline-block mx-2"
          >
            <i className="fa fa-github text-3xl text-blue-600"></i>
          </a>
          {props.Deploy && ( 
            <a
            href={props.Deploy}
            target="_blank"
            rel="noreferrer"
            className="inline-block mx-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="blue"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="blue"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
              />
            </svg>
          </a>
          )}
          
          <p className="inline-block text-white align-top mx-2">{props.projectName}</p>
        </div>
      </div>
    )
}

export default Project;