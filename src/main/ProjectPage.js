import Projects from "./projects/Projects.js";
import ProjectOne from "./projects/ProjectOne.js";
import ProjectTwo from "./projects/ProjectTwo.js";
import ProjectThree from "./projects/ProjectThree.js";
import ProjectFour from "./projects/ProjectFour.js";
import "./ProjectPage.css";

function ProjectPage({ toggleDarkMode }) {
  return (
    <div className="ProjectPage">
      <Projects toggleDarkMode={toggleDarkMode} />
      <ProjectOne toggleDarkMode={toggleDarkMode} />
      <ProjectTwo toggleDarkMode={toggleDarkMode} />
      <ProjectThree toggleDarkMode={toggleDarkMode} />
      <ProjectFour toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default ProjectPage;
