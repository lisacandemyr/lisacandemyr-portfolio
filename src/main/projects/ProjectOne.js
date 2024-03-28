import "../ProjectPage.css";

function ProjectOne({ toggleDarkMode }) {
  return (
    <div className="ProjectOne hidden" id="project-1">
      <div className="grid">
        <div
          className={`project-grid-item-1 float-left ${
            toggleDarkMode ? "grid-1-light-mode" : "grid-1-dark-mode"
          }`}
        ></div>
        <div
          className={`project-grid-item-2 float-right ${
            toggleDarkMode ? "grid-2-light-mode" : "grid-2-dark-mode"
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
                <p className="tool-specifications">Figma - Photoshop.</p>
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
                Motivated by an interest in web development and design, I
                enrolled in a coding bootcamp in August 2023 via{" "}
                <a
                  title="SheCodes"
                  href="https://shecodes.io"
                  target="_blank"
                  rel="noreferrer"
                  className={`shecodes-link ${
                    toggleDarkMode ? "text-light-mode" : "text-dark-mode"
                  }`}
                >
                  SheCodes
                </a>
                . It allowed the opportunity to learn from professionals within
                the industry and how to utilise the latest technologies. This
                project embodies all the skills I've learnt throughout the
                course.
                <br />
                <br />
                <em>
                  When it came to the vision for this project, I knew I wanted
                  to combine a vibrant color theme with a minimalistic structure
                  to keep a sleek and professional feel.
                  <br />
                  One of the keyfactors for me was to ensure that my portfolio
                  would end up more than just a standalone project. With this in
                  mind I took the opportunity to establish an identity and brand
                  for myself. With time, great attention to detail and a keen
                  eye for design, my vision came to life. This portfolio
                  functions as a virtual resume, highlighting my skills,
                  achievements and progression.
                </em>
              </p>
              <button
                title="Lisa's Portfolio Project"
                className={`link btn ${
                  toggleDarkMode ? "links-dark-mode" : "links-light-mode"
                }`}
                disabled
              >
                Show Project
              </button>
              <a
                title="Link to Lisa's GitHub for Portfolio Project"
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
      {/*   <div className="btn-container text-end">
        <button className="project-next-btn btn">
          <i
            className={`fa-thin fa-angle-right ${
              toggleDarkMode
                ? "project-btn-light-mode"
                : "project-btn-dark-mode"
            }`}
          ></i>
        </button>
      </div> */}
    </div>
  );
}

export default ProjectOne;
