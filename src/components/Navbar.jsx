import React from 'react';
import ConnectedNavLink from './ConnectedNavLink';

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
          <ConnectedNavLink exact to="/" className="nav-link">Summary</ConnectedNavLink>
        </li>
        <li className="nav-item">
          <ConnectedNavLink to="/data" className="nav-link">Data</ConnectedNavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
