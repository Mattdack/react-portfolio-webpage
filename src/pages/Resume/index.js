import React from "react";
import CV from "../../assets/Dacanay-CV-2022.pdf"


function Resume() {
  return (
    <div className="Resume backgroundImage h-[85%]  border-y-4 border-white overflow-auto grid grid-cols-1 place-items-center">
      <div>
        <h2>Technical Proficiencies</h2>
        <p>Languages: HTML, CSS, JavaScript</p>
        <p>Databases: MySQL, MongoDB, GraphQL</p>
        <p>CSS Frameworks: Bootsrap and Tailwind</p>
        <p>User Interfaces: Handlebars.js and React.js</p>
      </div>
      <a href = {CV} download="Dacanay-CV-2022.pdf" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Download Resume</a>
    </div>
  );
}

export default Resume;
