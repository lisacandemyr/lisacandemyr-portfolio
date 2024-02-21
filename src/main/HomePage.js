import "./HomePage.css";

function HomePage({ toggleDarkMode }) {
  const handleClick = (pageId) => {
    const home = document.getElementById("home-page");
    const menu = document.getElementById("menu-page");
    const page = document.getElementById(pageId);

    if (page.classList.contains("hidden")) {
      home.classList.add("fade-out");
      menu.classList.add("fade-out");
      setTimeout(() => {
        page.classList.remove("hidden");
        home.classList.add("hidden");
        menu.classList.add("hidden");
        home.classList.remove("fade-out");
        menu.classList.remove("fade-out");
      }, 500);
    } else if (home.classList.contains("hidden")) {
      page.classList.add("fade-out");
      menu.classList.add("fade-out");
      setTimeout(() => {
        home.classList.remove("hidden");
        page.classList.add("hidden");
        menu.classList.add("hidden");
        page.classList.remove("fade-out");
        menu.classList.remove("fade-out");
      }, 500);
    } else if (menu.classList.contains("hidden")) {
      page.classList.add("fade-out");
      home.classList.add("fade-out");
      setTimeout(() => {
        menu.classList.remove("hidden");
        page.classList.add("hidden");
        home.classList.add("hidden");
        page.classList.remove("fade-out");
        home.classList.remove("fade-out");
      }, 500);
    }
  };

  return (
    <div className="HomePage page" id="home-page">
      <div className="home-page float-up">
        <h1
          className={`text-center ${
            toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
          }`}
        >
          {" "}
          Hey I’m{" "}
          <span
            className={`size ${
              toggleDarkMode ? "size-light-mode" : "size-dark-mode"
            }`}
          >
            Li<span className="sa">sa</span>
          </span>
          <span className="hide">
            {" "}
            <span className="ca">Ca</span>ndemyr.
          </span>
        </h1>
        <h2 className="text-center">
          I'm a junior web developer and photographer
        </h2>
        <div className="text-center fade-in">
          <button
            onClick={() => handleClick("project-page")}
            className={`link project-btn btn ${
              toggleDarkMode ? "links-light-mode" : "links-dark-mode"
            }`}
          >
            <i className="fa-regular fa-arrow-right"></i> Projects
          </button>
          <button
            onClick={() => handleClick("gallery-page")}
            className={`link gallery-btn btn ${
              toggleDarkMode ? "links-light-mode" : "links-dark-mode"
            }`}
          >
            <i className="fa-regular fa-arrow-right"></i> Gallery
          </button>
          <button
            onClick={() => handleClick("about-page")}
            className={`link about-btn btn ${
              toggleDarkMode ? "links-light-mode" : "links-dark-mode"
            }`}
          >
            <i className="fa-regular fa-arrow-right"></i> About
          </button>
          <button
            onClick={() => handleClick("contact-page")}
            className={`link contact-btn btn ${
              toggleDarkMode ? "links-light-mode" : "links-dark-mode"
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
