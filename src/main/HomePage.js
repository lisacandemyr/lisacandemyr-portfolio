import React, { useState } from "react";
import "./HomePage.css";

function HomePage({ toggleDarkMode }) {
  const [selectedPage, setSelectedPage] = useState(null);

  const handleClick = (pageId) => {
    const pages = [
      "home-page",
      "project-page",
      "gallery-page",
      "about-page",
      "contact-page",
    ];

    pages.forEach((id) => {
      const page = document.getElementById(id);
      if (id === pageId) {
        setSelectedPage(pageId);
        setTimeout(() => {
          page.classList.remove("hidden");
        }, 500);
      } else {
        page.classList.add("fade-out");
        setTimeout(() => {
          page.classList.add("hidden");
          page.classList.remove("fade-out");
        }, 500);
      }
    });
  };

  return (
    <div className="HomePage page" id="home-page">
      <div className="home-page float-up">
        <h1
          className={`text-center ${
            toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
          }`}
        >
          {" "}
          Hey I’m{" "}
          <span
            className={`size ${
              toggleDarkMode ? "size-light-mode" : "size-dark-mode"
            }`}
          >
            Li<span className="sa">sa</span>
          </span>
          <span className="hide">
            {" "}
            <span className="ca">Ca</span>ndemyr.
          </span>
        </h1>
        <h2 className="text-center">
          I'm a junior web developer and photographer
        </h2>
        <div className="text-center fade-in">
          <button
            onClick={() => handleClick("project-page")}
            className={`link btn ${
              toggleDarkMode ? "links-light-mode" : "links-dark-mode"
            }`}
          >
            <i className="fa-regular fa-arrow-right"></i> Projects
          </button>
          <button
            onClick={() => handleClick("gallery-page")}
            className={`link btn ${
              toggleDarkMode ? "links-light-mode" : "links-dark-mode"
            }`}
          >
            <i className="fa-regular fa-arrow-right"></i> Gallery
          </button>
          <button
            onClick={() => handleClick("about-page")}
            className={`link btn ${
              toggleDarkMode ? "links-light-mode" : "links-dark-mode"
            }`}
          >
            <i className="fa-regular fa-arrow-right"></i> About
          </button>
          <button
            onClick={() => handleClick("contact-page")}
            className={`link btn ${
              toggleDarkMode ? "links-light-mode" : "links-dark-mode"
            }`}
          >
            <i className="fa-regular fa-arrow-right"></i> Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
