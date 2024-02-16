import "./MenuPage.css";

function MenuPage({ toggleDarkMode }) {
  return (
    <div className="MenuPage hidden" id="menu-page">
      <div className="menu-page">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-8">
            <ul className="float-right">
              <li
                className={`${
                  toggleDarkMode ? "menu-light-mode" : "menu-dark-mode"
                }`}
              >
                01
                <a
                  className={`${
                    toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
                  }`}
                >
                  home
                </a>
              </li>
              <li
                className={`${
                  toggleDarkMode ? "menu-light-mode" : "menu-dark-mode"
                }`}
              >
                02
                <a
                  className={`${
                    toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
                  }`}
                >
                  projects
                </a>
              </li>
              <li
                className={`${
                  toggleDarkMode ? "menu-light-mode" : "menu-dark-mode"
                }`}
              >
                03
                <a
                  className={`${
                    toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
                  }`}
                >
                  gallery
                </a>
              </li>
              <li
                className={`${
                  toggleDarkMode ? "menu-light-mode" : "menu-dark-mode"
                }`}
              >
                04
                <a
                  className={`${
                    toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
                  }`}
                >
                  about
                </a>
              </li>
              <li
                className={`${
                  toggleDarkMode ? "menu-light-mode" : "menu-dark-mode"
                }`}
              >
                05
                <a
                  className={`${
                    toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
                  }`}
                >
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
