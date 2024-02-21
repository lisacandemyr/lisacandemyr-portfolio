function Gallery({ toggleDarkMode }) {
  const handleClick = (pageId) => {
    const gallery = document.getElementById("gallery-page");
    const page = document.getElementById(pageId);

    if (page.classList.contains("hidden")) {
      gallery.classList.add("fade-out");
      setTimeout(() => {
        gallery.classList.add("hidden");
      }, 1000);
      page.classList.remove("hidden");
    }
  };

  return (
    <div className="Gallery hidden page" id="gallery-page">
      <div className="gallery-page">
        <h2
          className={`text-center float-up ${
            toggleDarkMode ? "outline-light-mode" : "outline-dark-mode"
          }`}
        >
          Gallery
        </h2>
        <div className="grid text-center fade-in">
          <button
            onClick={() => handleClick("gallery-1")}
            className="greenwich-market"
            id="greenwich-market"
          >
            <h3>Greenwich Market</h3>
            <p>Community</p>
          </button>
          <button
            onClick={() => handleClick("gallery-2")}
            className="ehla-eat"
            id="ehla-eat"
          >
            <h3>Ehla Eat</h3>
            <p>Eastern Mediterranean Food</p>
          </button>
          <button
            onClick={() => handleClick("gallery-3")}
            className="ryan-london"
            id="ryan-london"
          >
            <h3>Ryan London</h3>
            <p>Leather Goods</p>
          </button>
          <button
            onClick={() => handleClick("gallery-4")}
            className="live-music"
            id="live-music"
          >
            <h3>Live Music</h3>
            <p>Events</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
