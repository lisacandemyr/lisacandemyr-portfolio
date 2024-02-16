import "./HomePage.css";

function HomePage({ toggleDarkMode }) {
  const handleClick = (pageId) => {
    const home = document.getElementById("home-page");
    const page = document.getElementById(pageId);

    if (page.classList.contains("hidden")) {
      home.classList.add("fade-out");
      setTimeout(() => {
        page.classList.remove("hidden");
        home.classList.add("hidden");
      }, 500);
    }
  };

  return (
    <div className="HomePage float-up" id="home-page">
      <div className="home-page">
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
        <div className="text-center fade-in">
          <button
            onClick={() => handleClick("project-page")}
            className={`link project-btn btn ${
              toggleDarkMode ? "text-dark" : "text-light"
            }`}
          >
            <i className="fa-regular fa-arrow-right"></i> Projects
          </button>
          <button
            onClick={() => handleClick("gallery-page")}
            className={`link gallery-btn btn ${
              toggleDarkMode ? "text-dark" : "text-light"
            }`}
          >
            <i className="fa-regular fa-arrow-right"></i> Gallery
          </button>
          <button
            onClick={() => handleClick("about-page")}
            className={`link about-btn btn ${
              toggleDarkMode ? "text-dark" : "text-light"
            }`}
          >
            <i className="fa-regular fa-arrow-right"></i> About
          </button>
          <button
            onClick={() => handleClick("contact-page")}
            className={`link contact-btn btn ${
              toggleDarkMode ? "text-dark" : "text-light"
            }`}
          >
            <i className="fa-regular fa-arrow-right"></i> Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
