import "./ContactPage.css";

function ContactPage({ toggleDarkMode }) {
  return (
    <div className="ContactPage float-up hidden" id="contact-page">
      <div className="contact-page">
        <h2
          className={`text-center ${
            toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
          }`}
        >
          Contact
        </h2>
        <p className="text-center">
          <strong>Email</strong>
          <a
            href="mailto:lisa_candemyr@hotmail.com"
            className={`btn ${toggleDarkMode ? "text-dark" : "text-light"}`}
          >
            <i className="fa-regular fa-arrow-right"></i> lisa_candemyr
            <strong>@</strong>hotmail.com
          </a>
        </p>
        <p className="text-center">
          <strong>Socials</strong>
          <a
            href="https://www.linkedin.com/in/lisa-candemyr"
            className={`btn ${toggleDarkMode ? "text-dark" : "text-light"}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-regular fa-arrow-right"></i> Linkedin
          </a>
          /
          <a
            href="https://github.com/lisacandemyr"
            className={`btn ${toggleDarkMode ? "text-dark" : "text-light"}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-regular fa-arrow-right"></i> GitHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactPage;
