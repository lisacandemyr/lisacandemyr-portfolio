import React, { useState } from "react";
import logoLight from "../logo-light.png";
import logoDark from "../logo-dark.png";
import "../ProjectPage.css";

function ProjectOne({ toggleDarkMode }) {
  return (
    <div className="ProjectOne page hidden" id="project-1">
      <div className="project-one">
        <div className="grid">
          <div className="grid-item-1 float-left">
            <div className="background">[image]</div>
          </div>
          <div
            className={`grid-item-2 float-right ${
              toggleDarkMode ? "light-mode" : "dark-mode"
            } `}
          >
            <div
              className={`row ${
                toggleDarkMode ? "text-dark-mode" : "text-light-mode"
              }`}
            >
              <div className="col-md-4">
                <ul>
                  <li>
                    Code
                    <br />
                    <span>tools</span>
                  </li>
                  <p className="tool-specifications">
                    <i className="fa-brands fa-html5"></i> HTML,{" "}
                    <i className="fa-brands fa-css3-alt"></i> CSS,{" "}
                    <i className="fa-brands fa-js"></i> JavaScript,{" "}
                    <i className="fa-brands fa-react"></i> React,
                    <br />
                    <i className="fa-brands fa-bootstrap"></i> Bootstrap,{" "}
                    <i className="fa-brands fa-google"></i> Googlefonts,
                    <br />
                    <i className="fa-solid fa-font-awesome"></i> Fontawesome.
                  </p>
                  <br />
                  <li>
                    Design
                    <br />
                    <span>tools</span>
                  </li>
                  <p className="tool-specifications">
                    <i className="fa-brands fa-figma"></i> Figma,{" "}
                    <i className="fa-solid fa-image"></i> Photoshop.
                  </p>
                  <br />
                  <li>
                    Photo
                    <br />
                    <span>editing tools</span>
                  </li>
                  <p className="tool-specifications">
                    <i className="fa-regular fa-image"></i> Lightroom,{" "}
                    <i className="fa-solid fa-image"></i> Photoshop.
                  </p>
                </ul>
              </div>
              <div className="col-md-8">
                <h6>Branding / Web Developement / Photography</h6>
                <p>
                  <strong>Introduction:</strong> As a passionate developer, I
                  embarked on a journey to create my own personal portfolio
                  project, a digital space that reflects my skills, experiences,
                  and aspirations. This project holds a special place in my
                  heart as it represents not only my technical capabilities but
                  also my creative expression and dedication to continuous
                  learning and growth.
                  <br />
                  <br />
                  <strong>Concept and Purpose:</strong> My personal portfolio
                  project is more than just a collection of code; it's a
                  manifestation of my identity as a developer and a
                  professional. With meticulous attention to detail and a keen
                  eye for design, I crafted an intuitive and visually appealing
                  platform that serves as a virtual resume, showcasing my
                  expertise, accomplishments, and projects to the world.
                </p>
                <button
                  className={`link project-btn btn ${
                    toggleDarkMode ? "links-dark-mode" : "links-light-mode"
                  }`}
                  disabled
                >
                  • Show Project •
                </button>
                <button
                  className={`link project-btn btn ${
                    toggleDarkMode ? "links-dark-mode" : "links-light-mode"
                  }`}
                >
                  • GitHub Code •
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-container text-end">
          <button className="project-next-btn btn" disabled>
            <i
              className={`fa-thin fa-angle-right ${
                toggleDarkMode
                  ? "project-btn-light-mode"
                  : "project-btn-dark-mode"
              }`}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectOne;
