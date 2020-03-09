import React from "react";

export default function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand text-white" href="home">
        ClockWorks Light & Sound
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link text-white dropdown-toggle"
              href="menu"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Language
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Dutch
              </a>
              <a className="dropdown-item" href="#">
                English
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Papiamentu
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
