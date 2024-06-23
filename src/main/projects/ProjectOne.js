import React from "react";
import "../ProjectPage.css";

function ProjectOne({ toggleDarkMode }) {
  // Function for navigating to the next project
  const onClickNext = (currentProjectId, nextProjectId) => {
  const currentProject = document.getElementById(currentProjectId);
  const nextProject = document.getElementById(nextProjectId);

  if (!nextProject.classList.contains("hidden")) {
    return;
  }

  currentProject.classList.add("fade-out");
  setTimeout(() => {
    currentProject.classList.add("hidden");
    currentProject.classList.remove("fade-out");
    nextProject.classList.remove("hidden");
  }, 1000);
};

  return (
    <div className="ProjectOne hidden" id="project-1">
      <div className="grid">
      <div className={`project-grid-item-1-1 float-left ${toggleDarkMode ? "grid-light-mode" : "grid-dark-mode"}`}></div>
      <div className={`project-grid-item-1-2 float-right ${toggleDarkMode ? "grid-light-mode" : "grid-dark-mode"}`}>
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
                <p className="tool-specifications">Figma - Photoshop - <a title="Icons8" href="https://icons8.com" target="_blank" rel="noreferrer" className={`project-link ${toggleDarkMode ? "text-light-mode" : "text-dark-mode"}`}>Icons8</a>.</p>
                <br />
                <li>
                  Photo
                  <br />
                  <span>Editing Tools</span>
                </li>
                <p className="tool-specifications">Lightroom - Photoshop.</p>
              </ul>
            </div>
            <div className="col-lg-8">
              <p>
                Motivated by an interest for web development and design, I enrolled in a coding bootcamp through <a title="SheCodes" href="https://shecodes.io" target="_blank" rel="noreferrer" className={`project-link ${toggleDarkMode ? "text-light-mode" : "text-dark-mode"}`}>SheCodes</a> in August 2023. It allowed the opportunity to learn directly from industry professionals and gain insights into leveraging the latest technologies. 
                <br />
                <br />
                <em>
                For this project, my vision was to create a static page with dynamic content that transitions smoothly using fade and float-in-and-out animations. I aimed to enhance user interaction by implementing a classic mode toggle, chosen for both its visual appeal and functional benefits. To add a playful touch, I incorporated an animated gradient background and a grain texture effect.
                </em>
              </p>
              <button title="Lisa's Portfolio Project" className={`link btn ${toggleDarkMode ? "links-light-mode" : "links-dark-mode"}`}disabled >
                Show Project
              </button>
              <a title="Link to Lisa's GitHub for Portfolio Project" href="https://github.com/lisacandemyr/lisacandemyr-portfolio" target="_blank" rel="noreferrer" className={`link btn ${toggleDarkMode ? "links-light-mode" : "links-dark-mode"}`}>
                GitHub Code
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-container fade-in text-end">
      <button className="project-prev-btn btn" title="Previous Project - Lisa's Portfolio">
          <i className={`fa-thin fa-angle-left ${toggleDarkMode ? "project-btn-light-mode" : "project-btn-dark-mode"}`}></i>
        </button>
        <button className="project-next-btn btn" title="Next Project - Putechnology" onClick={() => onClickNext("project-1", "project-2")}>
          <i className={`fa-thin fa-angle-right ${toggleDarkMode ? "project-btn-light-mode" : "project-btn-dark-mode"}`}></i>
        </button>
      </div>
      
      <div className="btn-container text-end">

      </div>
    </div>
  );
}

export default ProjectOne;
