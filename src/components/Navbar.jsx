import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/">
          ACCOUNT MANAGER
        </NavLink>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink className="navbar-item">Add account</NavLink>
          <NavLink className="navbar-item">See accounts</NavLink>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <NavLink className="button is-primary" to="/signup">
              <strong>Sign up</strong>
            </NavLink>
            <NavLink className="button is-light" to="/login">Log in</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
