import "./HomePage.css";

function HomePage({ toggleDarkMode }) {
  return (
    <div className="HomePage float-up">
      <div className="home-page" id="home-page">
        <h1
          className={`text-center ${
            toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
          }`}
        >
          {" "}
          Hey I’m{" "}
          <span className="size">
            Li<span className="sa">sa</span>
          </span>
          <span className="hide">
            {" "}
            <span className="ca">Ca</span>ndemyr.
          </span>
        </h1>
        <h2 className="text-center">
          I’m a junior web developer and photographer
        </h2>
        <div className="links text-center fade-in">
          <a
            href="#projects-page"
            className={`link projects-btn btn ${
              toggleDarkMode ? "text-dark" : "text-light"
            }`}
          >
            <i className="fa-regular fa-arrow-right"></i> projects
          </a>
          <a
            href="#gallery-page"
            className={`link gallery-btn btn ${
              toggleDarkMode ? "text-dark" : "text-light"
            }`}
          >
            <i className="fa-regular fa-arrow-right"></i> gallery
          </a>
          <a
            href="#about-page"
            className={`link about-btn btn ${
              toggleDarkMode ? "text-dark" : "text-light"
            }`}
          >
            <i className="fa-regular fa-arrow-right"></i> about
          </a>
          <a
            href="#contact-page"
            className={`link contact-btn btn ${
              toggleDarkMode ? "text-dark" : "text-light"
            }`}
          >
            <i className="fa-regular fa-arrow-right"></i> contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
