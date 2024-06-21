import React from 'react';
import logoLightMode from "../logo-light-mode.png";
import logoDarkMode from "../logo-dark-mode.png";
import "../ProjectPage.css";

function Projects({ toggleDarkMode }) {
  // Function to show select project page
  const handleClick = (projectId) => {
    const projectPage = document.getElementById("project-page");
    const project1 = document.getElementById("project-1");
    const project2 = document.getElementById("project-2");
    const project3 = document.getElementById("project-3");
    const project4 = document.getElementById("project-4");

    const hideAllProjects = () => {
      project1.classList.add("hidden");
      project2.classList.add("hidden");
    };

    if (projectId === "project-1") {
      if (project1.classList.contains("hidden")) {
        projectPage.classList.add("fade-out");
        setTimeout(() => {
          projectPage.classList.add("hidden");
          projectPage.classList.remove("fade-out");
          hideAllProjects();
          project1.classList.remove("hidden");
        }, 1000);
      } else {
        project1.classList.add("fade-out");
        setTimeout(() => {
          project1.classList.add("hidden");
          project1.classList.remove("fade-out");
          projectPage.classList.remove("hidden");
        }, 1000);
      }
    } else if (projectId === "project-2") {
      if (project2.classList.contains("hidden")) {
        projectPage.classList.add("fade-out");
        setTimeout(() => {
          projectPage.classList.add("hidden");
          projectPage.classList.remove("fade-out");
          hideAllProjects();
          project2.classList.remove("hidden");
        }, 1000);
      } else {
        project2.classList.add("fade-out");
        setTimeout(() => {
          project2.classList.add("hidden");
          project2.classList.remove("fade-out");
          projectPage.classList.remove("hidden");
        }, 1000);
      }
    } else if (projectId === "project-3") {
      if (project3.classList.contains("hidden")) {
        projectPage.classList.add("fade-out");
        setTimeout(() => {
          projectPage.classList.add("hidden");
          projectPage.classList.remove("fade-out");
          hideAllProjects();
          project3.classList.remove("hidden");
        }, 1000);
      } else {
        project3.classList.add("fade-out");
        setTimeout(() => {
          project3.classList.add("hidden");
          project3.classList.remove("fade-out");
          projectPage.classList.remove("hidden");
        }, 1000);
      }
    } else if (projectId === "project-4") {
      if (project4.classList.contains("hidden")) {
        projectPage.classList.add("fade-out");
        setTimeout(() => {
          projectPage.classList.add("hidden");
          projectPage.classList.remove("fade-out");
          hideAllProjects();
          project4.classList.remove("hidden");
        }, 1000);
      } else {
        project4.classList.add("fade-out");
        setTimeout(() => {
          project4.classList.add("hidden");
          project4.classList.remove("fade-out");
          projectPage.classList.remove("hidden");
        }, 1000);
      }
    }
  };

  return (
    <div className="Projects hidden" id="project-page">
      <ul className="float-left">
        <li className={`${toggleDarkMode ? "text-light-mode" : "text-dark-mode"}`}
        >
          01
          <button
            title="Portfolio Project"
            onClick={() => handleClick("project-1")}
            className={`ms-1 ${
              toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
            }`}
          >
            <img
              src={`${toggleDarkMode ? logoLightMode : logoDarkMode}`}
              className="logo"
              height="45"
              width="45"
              alt="Logotype"
            />
            portfolio
          </button>
        </li>
        <li className={`${toggleDarkMode ? "text-light-mode" : "text-dark-mode"}`}
        >
          02
          <button
            title="Putechnology Project"
            onClick={() => handleClick("project-2")}
            className={`ms-2 ${
              toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
            }`}
          >
            Putechnology
          </button>
        </li>
        <li className={`${toggleDarkMode ? "text-light-mode" : "text-dark-mode"}`}
        >
          03
          <button
            title="Project Pending.."
            onClick={() => handleClick("project-3")}
            className={`ms-2 ${
              toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
            }`}
          >
            Pending..
          </button>
        </li>
        <li className={`${toggleDarkMode ? "text-light-mode" : "text-dark-mode"}`}
        >
          04
          <button
            title="Project Pending.."
            onClick={() => handleClick("project-4")}
            className={`ms-2 ${
              toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
            }`}
          >
            Pending..
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Projects;