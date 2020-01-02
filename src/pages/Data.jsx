import React from 'react';
import { Link } from 'react-router-dom';

import FilterBarContainer from '../containers/FilterBarContainer';
import SelectedLetterContainer from '../containers/SelectedLetterContainer';

const Data = () => (
  <>
    <FilterBarContainer />
    <h1>Data</h1>
    <SelectedLetterContainer />
    <Link to="/">Go Back Home</Link>
    <div className="row">
      <div className="col-md-6">
        <span>Chart</span>
      </div>
      <div className="col-md-6">
        <span>Chart</span>
      </div>
    </div>
  </>
);

export default Data;
