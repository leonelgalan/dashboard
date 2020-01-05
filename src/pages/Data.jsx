import React from 'react';
import ConnectedLink from '../components/ConnectedLink';

import FilterBarContainer from '../containers/FilterBarContainer';
import SelectedLetterContainer from '../containers/SelectedLetterContainer';

const Data = () => (
  <>
    <FilterBarContainer />
    <h1>Data</h1>
    <SelectedLetterContainer />
    <ConnectedLink to="/">Go Back Home</ConnectedLink>
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
