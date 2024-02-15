import Navbar from "./Navbar.js";
import HomePage from "./main/HomePage.js";
import ContactPage from "./main/ContactPage.js";
import MenuPage from "./main/MenuPage.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HomePage />
        <ContactPage />
        <MenuPage />
      </main>
    </div>
  );
}

export default App;
