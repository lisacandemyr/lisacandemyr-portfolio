import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="AboutPage float-up hidden">
      <div class="about-page" id="about-page">
        <h2 class="text-center outline-light-mode float-up">about</h2>
        <p class="text-center fade-in">
          Greetings, I'm Lisa - a <strong>junior web developer</strong>{" "}
          originally from Sweden but currently based in the UK.
          <br />
          <br />
          Alongside designing and building digital experiences, I also have a
          keen interest in photography. I have previously worked as a
          professional <strong>photographer</strong> and have included some of
          my work in my web developement portfolio.
          <br />
          <br />
          <em>
            This year, I am dedicated to continuely improve my proficiency in
            web development and design, alongside shooting more film
            photography. Visit my website regularly to witness the expansion of
            my portfolio, featuring an array of my projects and photography.
          </em>
        </p>
        <p class="text-center fade-in">
          <a href="#" class="btn">
            <i class="fa-regular fa-arrow-down-right"></i> My resume
          </a>
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
