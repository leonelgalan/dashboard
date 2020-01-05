import React from 'react';
import ConnectedNavLink from './ConnectedNavLink';

const Sidebar = () => (
  <nav className="col-md-2 d-none d-md-block bg-light sidebar vh-100">
    <div className="sidebar-sticky">
      <ul className="nav nav-pills flex-column py-3">
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

export default Sidebar;
