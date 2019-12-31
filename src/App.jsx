import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'jquery';
import 'popper.js';
import 'bootstrap';

import Summary from './pages/Summary';
import Data from './pages/Data';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

import './App.scss';

const App = () => (
  <Router>
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <Route exact path="/" component={Summary} />
            <Route path="/data" component={Data} />
          </main>
        </div>
      </div>
    </>
  </Router>
);

export default App;
