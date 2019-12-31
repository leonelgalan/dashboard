import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <span className="navbar-brand">Dashboard</span>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto d-md-none">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">Summary</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/data" className="nav-link">Data</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
