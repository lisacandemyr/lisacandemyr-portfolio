import "./ContactPage.css";

function ContactPage({ toggleDarkMode }) {
  return (
    <div className="ContactPage hidden float-up" id="contact-page">
      <h2 className={`text-center ${toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"}`}>
        Con<span className="space">t</span>act
      </h2>
      <p className={`text-center fade-in ${toggleDarkMode ? "text-light-mode" : "text-dark-mode"}`}>
        <strong>Email</strong>
        <a title="Email Lisa" href="mailto:lisa_candemyr@hotmail.com" className={`link btn ${toggleDarkMode ? "links-light-mode" : "links-dark-mode"}`}>
          lisa_candemyr<strong>@</strong>hotmail.com
        </a>
      </p>
      <p className={`text-center fade-in ${toggleDarkMode ? "text-light-mode" : "text-dark-mode"}`}>
        <strong>Socials</strong>
        <a title="Lisa's LinkedIn Profile" href="https://www.linkedin.com/in/lisa-candemyr" className={`link btn ${toggleDarkMode ? "links-light-mode" : "links-dark-mode"}`} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a title="Lisa's GitHub Profile" href="https://github.com/lisacandemyr" className={`link btn ${toggleDarkMode ? "links-light-mode" : "links-dark-mode"}`} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>
    </div>
  );
}

export default ContactPage;
