import "../ProjectPage.css";

function ProjectOne({ toggleDarkMode }) {
  return (
    <div className="ProjectOne hidden" id="project-1">
      <div className="grid">
        <div className="project-grid-item-1 float-left">
          <div className="background">
            <p>profile photo + logo</p>
          </div>
        </div>
        <div
          className={`project-grid-item-2 float-right ${
            toggleDarkMode ? "grid-light-mode" : "grid-dark-mode"
          }`}
        >
          <div
            className={`row ${
              toggleDarkMode ? "text-light-mode" : "text-dark-mode"
            }`}
          >
            <div
              className={`col-lg-4 ${
                toggleDarkMode ? "col-light-mode" : "col-dark-mode"
              }`}
            >
              <ul>
                <li>
                  Code
                  <br />
                  <span>platforms</span>
                </li>
                <p className="tool-specifications">VScode, GitHub, Netlify.</p>
                <br />
                <li>
                  front-end languages
                  <br />
                  <span>and frameworks</span>
                </li>
                <p className="tool-specifications">
                  HTML, CSS, JavaScript, React, Bootstrap.
                </p>
                <br />
                <li>
                  Design
                  <br />
                  <span>tools</span>
                </li>
                <p className="tool-specifications">Figma, Photoshop.</p>
                <br />
                <li>
                  Photo
                  <br />
                  <span>editing tools</span>
                </li>
                <p className="tool-specifications">Lightroom, Photoshop.</p>
              </ul>
            </div>
            <div className="col-lg-8">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                <em>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lacus vel facilisis volutpat est velit egestas dui. Nisl
                  suscipit adipiscing bibendum est.
                </em>
              </p>

              <button
                className={`link btn ${
                  toggleDarkMode ? "links-dark-mode" : "links-light-mode"
                }`}
                disabled
              >
                Show Project
              </button>
              <a
                href="https://github.com/lisacandemyr/lisacandemyr-portfolio"
                target="_blank"
                rel="noreferrer"
                className={`link btn ${
                  toggleDarkMode ? "links-light-mode" : "links-dark-mode"
                }`}
              >
                GitHub Code
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-container text-end">
        <button className="project-next-btn btn" disabled>
          <i
            className={`fa-thin fa-angle-right ${
              toggleDarkMode
                ? "project-btn-light-mode"
                : "project-btn-dark-mode"
            }`}
          ></i>
        </button>
      </div>
    </div>
  );
}

export default ProjectOne;
