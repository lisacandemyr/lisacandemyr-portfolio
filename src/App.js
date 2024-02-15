import Navbar from "./Navbar.js";
import HomePage from "./main/HomePage.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default App;
