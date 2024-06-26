import React from "react";
import "../ProjectPage.css";

function ProjectTwo({ toggleDarkMode }) {
    // Function for navigating to the previous project
  const onClickPrev = (currentProjectId, prevProjectId) => {
    const currentProject = document.getElementById(currentProjectId);
    const prevProject = document.getElementById(prevProjectId);
  
    if (!prevProject || !currentProject) {
      return;
    }
  
    if (!prevProject.classList.contains("hidden")) {
      return;
    }
  
    currentProject.classList.add("fade-out");
    setTimeout(() => {
      currentProject.classList.add("hidden");
      currentProject.classList.remove("fade-out");
      prevProject.classList.remove("hidden");
    }, 1000);
  };

  return (
    <div className="ProjectTwo hidden" id="project-2">
      <div className="grid">
        <div className={`project-grid-item-2-1 float-left ${toggleDarkMode ? "grid-light-mode" : "grid-dark-mode"}`}></div>
        <div className={`project-grid-item-2-2 float-right ${toggleDarkMode ? "grid-light-mode" : "grid-dark-mode"}`}>
          <div className={`row ${toggleDarkMode ? "text-light-mode" : "text-dark-mode"}`}>
            <div className={`col-lg-4 ${toggleDarkMode ? "col-light-mode" : "col-dark-mode"}`}>
              <ul>
                <li>
                  Code
                  <br />
                  <span>Tools and Hosting Platforms</span>
                </li>
                <p className="tool-specifications">
                  VS Code - GitHub - Netlify.
                </p>
                <br />
                <li>
                  Front-end Languages
                  <br />
                  <span>Libraries and Frameworks</span>
                </li>
                <p className="tool-specifications">
                  JavaScript - React - Bootstrap.
                </p>
                <br />
                <li>
                  Design
                  <br />
                  <span>Tools</span>
                </li>
                <p className="tool-specifications"><a title="Icons8" href="https://icons8.com" target="_blank" rel="noreferrer" className={`project-link ${toggleDarkMode ? "text-light-mode" : "text-dark-mode"}`}>Icons8</a>.</p>
                <br />
                <li>
                  Photo
                  <br />
                  <span>Editing Tools</span>
                </li>
                <p className="tool-specifications">N/A.</p>
              </ul>
            </div>
            <div className="col-lg-8">
              <p>
                My second project is a mock-up page designed for a company specialising in polyurethane insulation materials.
                <br />
                <br />
                <em>
                The header icon is inspired by the imagined appearance of polyurethane at a microscopic level, enhanced with colors for added engagement. The subsequent icons are chosen to complement the first one, creating a cohesive and continuous aesthetic throughout the project (while awaiting higher quality imagery). Once again, I've opted for a static page design, but this time with scrollable content. The colour palette has been updated to a more technological look, with elements styled using glassmorphism to truly capture the modern feel. To add a bit of fun distinct from my previous project, I've added a smooth scroll effect, with a hover glitch feature to the headline and implemented a more interactive menu.
                </em>
              </p>
              <a title="Lisa's Putechnology Project" href="https://putechnology.netlify.app" target="_blank" rel="noreferrer" className={`link btn ${toggleDarkMode ? "links-light-mode" : "links-dark-mode"}`}>
                Show Project
              </a>
              <a title="Link to Lisa's GitHub for Portfolio Project" href="https://github.com/lisacandemyr/putechnology" target="_blank" rel="noreferrer" className={`link btn ${toggleDarkMode ? "links-light-mode" : "links-dark-mode"}`}>
                GitHub Code
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-container fade-in text-end">
      <button className="project-prev-btn btn" title="Previous Project - Lisa's Portfolio" onClick={() => onClickPrev("project-2", "project-1")}>
          <i className={`fa-thin fa-angle-left ${toggleDarkMode ? "project-btn-light-mode" : "project-btn-dark-mode"}`}></i>
        </button>
        <button className="project-next-btn btn" title="Next Project - Pending.." disabled >
          <i className={`fa-thin fa-angle-right ${toggleDarkMode ? "project-btn-light-mode" : "project-btn-dark-mode"}`}></i>
        </button>
      </div>
    </div>
  );
}

export default ProjectTwo;
