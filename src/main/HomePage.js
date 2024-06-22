import React, { useState } from "react";
import "./HomePage.css";

function HomePage({ toggleDarkMode }) {
  // State to manage select page
  const [selectedPage, setSelectedPage] = useState(null);

  // Function to show select page
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
    <div className="HomePage float-up" id="home-page">
      <h1 className={`text-center ${toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"}`}>
        Hey I’m <span className={`size ${toggleDarkMode ? "size-light-mode" : "size-dark-mode"}`}>Li<span className="sa">sa</span></span><span className="hide"> <span className="ca">Ca</span>ndemyr.</span><span className={`size-surname hidden ${toggleDarkMode ? "size-surname-light" : "size-surname-dark"}`}><span className="more-space">C</span>andemyr</span>
      </h1>
      <h2 className={`text-center ${toggleDarkMode ? "text-light-mode" : "text-dark-mode"}`}>
        Junior Web Developer and Photographer
      </h2>
      <div className="text-center fade-in">
        <button title="Lisa's Web Projects" onClick={() => handleClick("project-page")} className={`link btn ${toggleDarkMode ? "links-light-mode" : "links-dark-mode"}`}>
          Projects
        </button>
        <button title="Lisa's Photo Gallery" onClick={() => handleClick("gallery-page")} className={`link btn ${toggleDarkMode ? "links-light-mode" : "links-dark-mode"}`}>
          Gallery
        </button>
        <button title="About Lisa" onClick={() => handleClick("about-page")} className={`link btn ${toggleDarkMode ? "links-light-mode" : "links-dark-mode"}`}>
          About Me
        </button>
        <button title="Contact Lisa" onClick={() => handleClick("contact-page")} className={`link btn ${toggleDarkMode ? "links-light-mode" : "links-dark-mode"}`}>
          Contact
        </button>
      </div>
    </div>
  );
}

export default HomePage;
