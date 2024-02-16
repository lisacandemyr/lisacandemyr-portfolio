import Gallery from "./gallery/Gallery.js";
import GalleryOne from "./gallery/GalleryOne.js";
import GalleryTwo from "./gallery/GalleryTwo.js";
import GalleryThree from "./gallery/GalleryThree.js";
import GalleryFour from "./gallery/GalleryFour.js";
import "./GalleryPage.css";

function GalleryPage({ toggleDarkMode }) {
  return (
    <div className="GalleryPage">
      <Gallery toggleDarkMode={toggleDarkMode} />
      <GalleryOne toggleDarkMode={toggleDarkMode} />
      <GalleryTwo toggleDarkMode={toggleDarkMode} />
      <GalleryThree toggleDarkMode={toggleDarkMode} />
      <GalleryFour toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default GalleryPage;
