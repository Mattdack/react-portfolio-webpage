import React from "react";

import professional from "../../assets/images/Dacanay_Matthew.jpg";
import science from "../../assets/images/Science.jpg";
import partner from "../../assets/images/Partner.jpg";
import outdoor from "../../assets/images/Outdoor.jpg";

function AboutMe() {
  return (
    <div className="AboutMe grid md:grid-cols-2 grid lg:grid-cols-2 backgroundImage h-[85%] border-y-4 border-white overflow-auto">
      <div className="Photos grid grid-cols-2 place-items-center my-10 md:my-0">
        <img
          src={professional}
          alt="Professional headshot"
          className="h-auto w-48 border-4 border-slate-400 rounded-md shadow-lg shadow-black"
        />
        <img
          src={science}
          alt="Professional headshot"
          className="h-auto w-48 border-4 border-slate-400 rounded-md shadow-lg shadow-black"
        />
        <img
          src={partner}
          alt="Professional headshot"
          className="h-auto w-48 border-4 border-slate-400 rounded-md shadow-lg shadow-black"
        />
        <img
          src={outdoor}
          alt="Professional headshot"
          className="h-56 w-auto border-4 border-slate-400 rounded-md shadow-lg shadow-black"
        />
      </div>
      <div className= "flex items-center grid place-items-center py-5">
        <div className="Info w-[75%] grid place-items-center">
          <p className="text-center bg-teal-100/70 border-4 border-slate-400 rounded-md shadow-lg shadow-black p-4">
            I am a budding full-stack software developer, recently graduated
            from the University of Washington - Trilogy full time Bootcamp.
            During that course, I created a foundational knowledge base for data
            storage, restful API's and web servers, progressive web
            applications, and React. In addition, I am familiar with Mongo, Sql,
            and GraphQL database structures. I am excited to continue growing
            and applying this new skillset.
          </p>
          <br />
          <hr className = "w-3/4 my-2 mx-auto h-1 bg-slate-200 rounded border-0 md:my-4"/>
          <br />
          <p className="text-center bg-teal-100/70 border-4 border-slate-400 rounded-md shadow-lg shadow-black p-4">
            Previously working as a research scientist, I developed a passion
            for operationalizing projects and building pipelines to acquire and
            process data. I have a proven track record of a team-work oriented
            attitude, robust critical thinking, and motivation to improve
            systems.
          </p>
          <br />
          <hr className = "w-3/4 my-2 mx-auto h-1 bg-slate-200 rounded border-0 md:my-4"/>
          <br />
          <p className="text-center bg-teal-100/70 border-4 border-slate-400 rounded-md shadow-lg shadow-black p-4">
            In addition to pursuing a career as a software developer. I am an
            avid hiker, board-game competitor, and video-game enthusiast,
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
