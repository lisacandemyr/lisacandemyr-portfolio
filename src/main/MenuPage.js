import "./MenuPage.css";

function MenuPage() {
  return (
    <div className="MenuPage hidden">
      <div className="menu-page" id="menu-page">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-8">
            <ul className="float-right">
              <li className="menu-light-mode">
                01<a className="outline-light-mode">home</a>
              </li>
              <li className="menu-light-mode">
                02<a className="outline-light-mode">projects</a>
              </li>
              <li className="menu-light-mode">
                03<a className="outline-light-mode">gallery</a>
              </li>
              <li className="menu-light-mode">
                04<a className="outline-light-mode">about</a>
              </li>
              <li className="menu-light-mode">
                05<a className="outline-light-mode">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
