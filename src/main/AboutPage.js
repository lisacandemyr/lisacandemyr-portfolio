import lisaCV from "./lisacandemyr-cv.pdf";
import "./AboutPage.css";

function AboutPage({ toggleDarkMode }) {
  return (
    <div className="AboutPage hidden page" id="about-page">
      <div className="about-page">
        <h2
          className={`text-center float-up ${
            toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
          }`}
        >
          About
        </h2>
        <p
          className={`text-center fade-in ${
            toggleDarkMode ? "text-light-mode" : "text-dark-mode"
          }`}
        >
          Greetings, I'm Lisa - a <strong>junior web developer</strong>{" "}
          originally from Sweden but currently based in Bath, UK.
          <br />
          <br />
          Alongside designing and building digital experiences, I also have a
          keen interest in photography. I have previously done some professional
          work as a <strong>photographer</strong> and have included some of it
          in my web developement portfolio.
          <br />
          <br />
          <em>
            This year, I am dedicated to continuely improve my proficiency in
            web development and design, alongside shooting more film
            photography. Visit my website regularly to witness the expansion of
            my portfolio, featuring an array of my projects and images.
          </em>
        </p>
        <p className="text-center fade-in">
          <a
            href={lisaCV}
            className={`btn ${
              toggleDarkMode ? "links-light-mode" : "links-dark-mode"
            }`}
            target="_blank"
            download="lisacandemyr-cv.pdf"
          >
            • <i className="fa-regular fa-arrow-down-right"></i> My Resume •
          </a>
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
