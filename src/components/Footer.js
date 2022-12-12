import React from "react";

function Footer() {
  return (
    <div className="Footer bg-teal-500 h-[7.5%] grid place-items-center">
      <div>
      <a href="https://github.com/mattdack" target="_blank" rel="noreferrer" className="mx-10">
        <i className="fa fa-github text-3xl text-white"></i>
      </a>
      <a href="https://linkedin.com/in/matthew-dacanay" target="_blank" rel="noreferrer" className="mx-10">
        <i className="fa fa-linkedin-square text-3xl text-white"></i>
      </a>
      </div>
    </div>
  );
}

export default Footer;
