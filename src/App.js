import Navbar from "./Navbar.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;

function changeTheme(event) {
  event.preventDefault();
  const themeButtonIcon = document.querySelector(".theme-btn i");
  const outlineObjects = document.querySelectorAll(".outline-light-mode");
  const text = document.querySelectorAll(".text");
  const buttons = document.querySelectorAll(".btn");
  const background = document.querySelector("body");

  if (themeButtonIcon.classList.contains("fa-solid")) {
    themeButtonIcon.classList.toggle("fa-thin", true);
    themeButtonIcon.classList.toggle("fa-solid", false);

    outlineObjects.forEach((element) => {
      element.classList.add("outline-dark-mode");
    });

    text.forEach((element) => {
      element.style.color = "var(--light-color)";
    });

    buttons.forEach((element) => {
      element.style.color = "var(--light-color)";
    });

    background.style.background = "var(--dark-color)";
  } else {
    themeButtonIcon.classList.toggle("fa-thin", false);
    themeButtonIcon.classList.toggle("fa-solid", true);

    outlineObjects.forEach((element) => {
      element.classList.remove("outline-dark-mode");
    });

    text.forEach((element) => {
      element.style.color = "";
    });

    buttons.forEach((element) => {
      element.style.color = "";
    });

    background.style.background = "";
  }
}

const themeButton = document.querySelector(".theme-btn");
themeButton.addEventListener("click", changeTheme);
