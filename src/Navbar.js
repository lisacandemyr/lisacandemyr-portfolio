import "./Navbar.css";

function Navbar({ toggleDarkMode, toggleDarkTheme }) {
  return (
    <div className="Navbar float-down">
      <nav>
        <div>
          <p
            className={`brand ms-3 ${
              toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
            }`}
          >
            L<span className="letter">C</span>
            <span className="stop">.</span>
          </p>
        </div>
        <div className="btn-container">
          <div>
            <button
              className={`btn ${
                toggleDarkMode ? "theme-btn-light" : "theme-btn-dark"
              }`}
              id="toggle"
              onClick={toggleDarkTheme}
            >
              <i
                className={`fa-lightbulb ${
                  toggleDarkMode ? "fa-solid" : "fa-thin"
                }`}
              ></i>
            </button>
          </div>
          <div>
            <button
              className={`btn ${
                toggleDarkMode ? "menu-btn-light" : "menu-btn-dark"
              }`}
            >
              <i className="fa-thin fa-ellipsis-stroke-vertical"></i>
              <i className="fa-thin fa-ellipsis-stroke-vertical"></i>
              <i className="fa-thin fa-ellipsis-stroke-vertical"></i>
            </button>
            <button className="menu-btn-close btn hidden">
              <i
                className={`fa-solid fa-xmark ${
                  toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
                }`}
              ></i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
