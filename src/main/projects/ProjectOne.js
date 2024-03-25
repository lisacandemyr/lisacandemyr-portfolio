import "../ProjectPage.css";

function ProjectOne({ toggleDarkMode }) {
  return (
    <div className="ProjectOne hidden" id="project-1">
      <div className="grid">
        <div
          className={`project-grid-item-1 float-left ${
            toggleDarkMode ? "grid-1-light-mode" : "grid-1-dark-mode"
          }`}
        >
          <p>[profile image]</p>
        </div>
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
                  <span>and hosting platforms</span>
                </li>
                <p className="tool-specifications">
                  VScode - GitHub - Netlify.
                </p>
                <br />
                <li>
                  front-end languages
                  <br />
                  <span>and frameworks</span>
                </li>
                <p className="tool-specifications">
                  HTML - CSS - JavaScript - React - Bootstrap.
                </p>
                <br />
                <li>
                  Design
                  <br />
                  <span>tools</span>
                </li>
                <p className="tool-specifications">Figma - Photoshop.</p>
                <br />
                <li>
                  Photo
                  <br />
                  <span>editing tools</span>
                </li>
                <p className="tool-specifications">Lightroom - Photoshop.</p>
              </ul>
            </div>
            <div className="col-lg-8">
              <p>
                Motivated by an interest in web development and design, I
                enrolled in a coding bootcamp in August 2023 via SheCodes. It
                allowed the opportunity to learn from professionals within the
                industry and how to utilise the latest technologies. This
                project embodies all the skills I've learnt throughout the
                course.
                <br />
                <br />
                <em>
                  To ensure my portfolio would be more than just a collection of
                  code, I felt it was important to establish a brand and
                  identity for myself as a developer. With time, great attention
                  to detail and a keen eye for design, my vision came to life.
                  This portfolio functions as a virtual resume, highlighting my
                  strengths and accomplishments.
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
