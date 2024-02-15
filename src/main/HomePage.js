import "./HomePage.css";

function HomePage() {
  return (
    <div className="HomePage float-up">
      <div className="homepage" id="homepage">
        <h1 className="text-center outline-light-mode">
          Hey I’m{" "}
          <span className="size">
            Li<span className="sa">sa</span>
          </span>
          <span className="hide">
            {" "}
            <span className="ca">Ca</span>ndemyr.
          </span>
        </h1>
        <h2 className="text-center text">
          I’m a junior web developer and photographer
        </h2>
        <div className="links text-center fade-in">
          <a href="#projects-page" className="projects-btn btn">
            <i className="fa-regular fa-arrow-right"></i> projects
          </a>
          <a href="#gallery-page" className="gallery-btn btn">
            <i className="fa-regular fa-arrow-right"></i> gallery
          </a>
          <a href="#about-page" className="about-btn btn">
            <i className="fa-regular fa-arrow-right"></i> about
          </a>
          <a href="#contact-page" className="contact-btn btn">
            <i className="fa-regular fa-arrow-right"></i> contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
