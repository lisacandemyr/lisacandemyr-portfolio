import "./ProjectPage.css";

function ProjectPage({ toggleDarkMode }) {
  return (
    <div className="ProjectPage hidden page" id="project-page">
      <div className="project-page">
        <ul className="float-left">
          <li
            className={`${
              toggleDarkMode ? "project-light-mode" : "project-dark-mode"
            }`}
          >
            01
            <button
              className={`${
                toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
              }`}
            >
              Project
            </button>
          </li>
          <li
            className={`${
              toggleDarkMode ? "project-light-mode" : "project-dark-mode"
            }`}
          >
            02
            <button
              className={`${
                toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
              }`}
            >
              Project
            </button>
          </li>
          <li
            className={`${
              toggleDarkMode ? "project-light-mode" : "project-dark-mode"
            }`}
          >
            03
            <button
              className={`${
                toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
              }`}
            >
              Project
            </button>
          </li>
          <li
            className={`${
              toggleDarkMode ? "project-light-mode" : "project-dark-mode"
            }`}
          >
            04
            <button
              className={`${
                toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
              }`}
            >
              Project
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectPage;
