import "./ProjectPage.css";

function ProjectPage({ toggleDarkMode }) {
  return (
    <div className="ProjectPage hidden page" id="project-page">
      <div className="project-page">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-4">
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
                  template
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
                  template
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
                  template
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
                  template
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
