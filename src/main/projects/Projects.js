import logoLight from "../logo-light.png";
import logoDark from "../logo-dark.png";
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
            title="Portfolio Project"
            onClick={() => handleClick("project-1")}
            className={`ms-1 ${
              toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
            }`}
          >
            <img
              src={`${toggleDarkMode ? logoLight : logoDark}`}
              className="logo"
              height="45"
              width="45"
              alt="Logotype"
            />
            portfolio
          </button>
        </li>
        <li>
          02
          <button
            title="Project Pending.."
            className={`ms-2 ${
              toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
            }`}
          >
            Pending..
          </button>
        </li>
        <li>
          03
          <button
            title="Project Pending.."
            className={`ms-2 ${
              toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
            }`}
          >
            Pending..
          </button>
        </li>
        <li>
          04
          <button
            title="Project Pending.."
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
