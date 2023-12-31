import React from "react";
import propTypes from "prop-types";

export default function Navbar(props) {

  return (
    <>

<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">about</a>
        </li>
      </ul>

      <button onClick={props.changeColorToRed} type="button" className="btn btn-danger mx-2">red</button>
      <button onClick={props.changeColorToYellow} type="button" className="btn btn-warning mx-2">yellow</button>
      <button onClick={props.changeColorToCyan} type="button" className="btn btn-info mx-2">cyan</button>

      <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
        <input onClick={props.changeMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">enable dark mode</label>
      </div>


    </div>
  </div>
  </nav>

    </>
  );
}

Navbar.prototype = {
  title: propTypes.String
};

