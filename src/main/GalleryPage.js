import Gallery from "./gallery/Gallery.js";
import GalleryOne from "./gallery/GalleryOne.js";
import GalleryTwo from "./gallery/GalleryTwo.js";
import GalleryThree from "./gallery/GalleryThree.js";
import GalleryFour from "./gallery/GalleryFour.js";
import "./GalleryPage.css";

function GalleryPage() {
  return (
    <div className="GalleryPage">
      <Gallery />
      <GalleryOne />
      <GalleryTwo />
      <GalleryThree />
      <GalleryFour />
    </div>
  );
}

export default GalleryPage;
