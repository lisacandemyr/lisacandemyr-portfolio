import Gallery from "./gallery/Gallery.js";
import GalleryOne from "./gallery/GalleryOne.js";
import GalleryTwo from "./gallery/GalleryTwo.js";
import "./GalleryPage.css";

function GalleryPage() {
  return (
    <div className="GalleryPage">
      <Gallery />
      <GalleryOne />
      <GalleryTwo />
    </div>
  );
}

export default GalleryPage;
