import Navbar from "./Navbar.js";
import HomePage from "./main/HomePage.js";
import GalleryPage from "./main/GalleryPage.js";
import AboutPage from "./main/AboutPage.js";
import ContactPage from "./main/ContactPage.js";
import MenuPage from "./main/MenuPage.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HomePage />
        <GalleryPage />
        <AboutPage />
        <ContactPage />
        <MenuPage />
      </main>
    </div>
  );
}

export default App;
