import React from "react";
import Project from "../../components/Project";

import Blog from "../../assets/images/blog.jpg";
import Econ from "../../assets/images/E-commerce.jpg";
import Gloomhaven from "../../assets/images/Gloomhaven.jpg";
import Hiking from "../../assets/images/Hiking.jpg";
import Social from "../../assets/images/social-media.jpg";
import weather from "../../assets/images/weather.jpg";

function Portfolio() {
  return (
    <div className="Portfolio bg-teal-500 backgroundImage h-[85%]  border-y-4 border-white overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place content-center my-4">
        <Project Image={Blog} Github="https://github.com/Mattdack/tech-blog" Deploy = "https://tech-blog-dacanay.herokuapp.com/" projectName="Tech Blog"/>
        <Project Image={Gloomhaven} Github="https://github.com/Mattdack/gloomhaven-helper" Deploy = "https://gloomhaven-helper-deluxe.herokuapp.com/" projectName="Gloomhaven Helper"/>
        <Project Image={Econ} Github="https://github.com/Mattdack/e-commerce-back-end" projectName="E-Commerce Server"/>
        <Project Image={Social} Github="https://github.com/Mattdack/social-media-api" projectName="Social Media API"/>
        <Project Image={Hiking} Github="https://github.com/Mattdack/hiking-app" Deploy = "https://mattdack.github.io/hiking-app/" projectName="National Park Finder"/>
        <Project Image={weather} Github="https://github.com/Mattdack/weather-forecast" Deploy = "https://mattdack.github.io/weather-forecast/" projectName="Weather Forecast Generator"/>
      </div>
    </div>
  );
}

export default Portfolio;
