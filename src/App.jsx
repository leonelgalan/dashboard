import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './lib/configureStore';

import 'jquery';
import 'popper.js';
import 'bootstrap';

import Summary from './pages/Summary';
import Data from './pages/Data';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

import './App.scss';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10">
              <Route exact path="/" component={Summary} />
              <Route path="/data" component={Data} />
            </main>
          </div>
        </div>
      </>
    </ConnectedRouter>
  </Provider>
);

export default App;
