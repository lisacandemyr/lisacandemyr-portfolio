function Projects({ toggleDarkMode }) {
  const handleClick = () => {
    const projectPage = document.getElementById("project-page");
    const project1 = document.getElementById("project-1");

    if (project1.classList.contains("hidden")) {
      projectPage.classList.add("fade-out");
      setTimeout(() => {
        projectPage.classList.add("hidden");
        projectPage.classList.remove("fade-out");
      }, 1000);
      setTimeout(() => {
        project1.classList.remove("hidden");
      }, 1100);
    } else {
      project1.classList.add("fade-out");
      setTimeout(() => {
        project1.classList.add("hidden");
        project1.classList.remove("fade-out");
      }, 1000);
      setTimeout(() => {
        projectPage.classList.remove("hidden");
      }, 1100);
    }
  };

  return (
    <div className="Projects hidden page" id="project-page">
      <div className="project-page">
        <ul className="float-left">
          <li
            className={`${
              toggleDarkMode ? "project-light-mode" : "project-dark-mode"
            }`}
          >
            01
            <button
              onClick={() => handleClick("project-1")}
              className={`${
                toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
              }`}
            >
              li<span className="sa">sa</span>
              <span className="ca">ca</span>ndemyr
              <small>.com</small>
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
              Pending..
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
              Pending..
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
              Pending..
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
