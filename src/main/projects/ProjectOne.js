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
            <div className="col-md-4">
              <ul>
                <li>
                  Code
                  <br />
                  <span>tools</span>
                </li>
                <p className="tool-specifications">
                  <i className="fa-brands fa-html5"></i> HTML,{" "}
                  <i className="fa-brands fa-css3-alt"></i> CSS,{" "}
                  <i className="fa-brands fa-js"></i> JavaScript,{" "}
                  <i className="fa-brands fa-react"></i> React,
                  <br />
                  <i className="fa-brands fa-bootstrap"></i> Bootstrap,{" "}
                  <i className="fa-brands fa-google"></i> Googlefonts,
                  <br />
                  <i className="fa-solid fa-font-awesome"></i> Fontawesome.
                </p>
                <br />
                <li>
                  Design
                  <br />
                  <span>tools</span>
                </li>
                <p className="tool-specifications">
                  <i className="fa-brands fa-figma"></i> Figma,{" "}
                  <i className="fa-solid fa-image"></i> Photoshop.
                </p>
                <br />
                <li>
                  Photo
                  <br />
                  <span>editing tools</span>
                </li>
                <p className="tool-specifications">
                  <i className="fa-regular fa-image"></i> Lightroom,{" "}
                  <i className="fa-solid fa-image"></i> Photoshop.
                </p>
              </ul>
            </div>
            <div className="col-md-8">
              <p>
                Motivated by a genuine interest towards design and web
                development, I embarked on <br />
                an eight-month journey immersed in coding and learning through
                SheCodes.io. <br />
                This platform encapsulates all the knowledge and skills I've
                acquired throughout <br />
                the course and more.
                <br />
                <br />
                My personal portfolio is a manifestation of my identity as a
                developer and a professional. With meticulous attention to
                detail and a keen eye for design, I've crafted an intuitive and
                visually appealing platform from scratch in VScode, that serves
                as a virtual resume, showcasing my expertise, accomplishments
                and projects.
              </p>
              <br />
              <br />
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
