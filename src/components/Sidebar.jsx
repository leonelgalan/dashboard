import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <nav className="col-md-2 d-none d-md-block bg-light sidebar vh-100">
    <div className="sidebar-sticky">
      <ul className="nav nav-pills flex-column py-3">
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

export default Sidebar;
