import Navbar from "./Navbar.js";
import HomePage from "./main/HomePage.js";
import MenuPage from "./main/MenuPage.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HomePage />
        <MenuPage />
      </main>
    </div>
  );
}

export default App;
