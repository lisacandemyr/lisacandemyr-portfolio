import "./GalleryPage.css";

function GalleryPage() {
  return (
    <div className="GalleryPage">
      <div className="gallery-page" id="gallery-page">
        <h2 className="text-center outline-light-mode float-up">Gallery</h2>
        <div className="grid text-center fade-in">
          <a className="greenwich-market" id="greenwich-market">
            <h3>Greenwich Market</h3>
            <p>Community</p>
          </a>
          <a className="ehla-eat" id="ehla-eat">
            <h3>Ehla Eat</h3>
            <p>Eastern Mediterranean Food</p>
          </a>
          <a className="ryan-london" id="ryan-london">
            <h3>Ryan London</h3>
            <p>Leather Goods</p>
          </a>
          <a className="live-music" id="live-music">
            <h3>Live Music</h3>
            <p>Events</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
