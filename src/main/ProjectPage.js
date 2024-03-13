import Projects from "./projects/Projects.js";
import ProjectOne from "./projects/ProjectOne.js";
import "./ProjectPage.css";

function ProjectPage({ toggleDarkMode }) {
  return (
    <div className="ProjectPage">
      <Projects toggleDarkMode={toggleDarkMode} />
      <ProjectOne toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default ProjectPage;
