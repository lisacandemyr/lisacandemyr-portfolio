import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar float-down">
      <nav>
        <div>
          <p className="brand outline-light-mode ms-3">
            L<span className="letter">C</span>
            <span className="stop">.</span>
          </p>
        </div>
        <div className="btn-container">
          <div>
            <button className="theme-btn btn">
              <i className="fa-solid fa-lightbulb"></i>
            </button>
          </div>
          <div>
            <button className="menu-btn btn">
              <i className="fa-thin fa-ellipsis-stroke-vertical"></i>
              <i className="fa-thin fa-ellipsis-stroke-vertical"></i>
              <i className="fa-thin fa-ellipsis-stroke-vertical"></i>
            </button>
            <button className="menu-btn-close btn hidden">
              <i className="fa-solid fa-xmark outline-light-mode"></i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
