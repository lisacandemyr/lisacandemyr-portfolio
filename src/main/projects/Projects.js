import "../ProjectPage.css";

function Projects({ toggleDarkMode }) {
  // Function to show select project page
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
    <div className="Projects hidden" id="project-page">
      <ul className="float-left">
        <li>
          01
          <button
            onClick={() => handleClick("project-1")}
            className={`${
              toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
            }`}
          >
            li<span className="sa">sa</span>
            <span className="ca">ca</span>ndemyr
          </button>
        </li>
        <li>
          02
          <button
            className={`${
              toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
            }`}
          >
            Pending..
          </button>
        </li>
        <li>
          03
          <button
            className={`${
              toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
            }`}
          >
            Pending..
          </button>
        </li>
        <li>
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
  );
}

export default Projects;
