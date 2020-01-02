import React from 'react';
import PropTypes from 'prop-types';

import { LETTERS } from '../../filter';

const LetterFilter = ({ value, onChange }) => (
  <div className="form-group col-md-3">
    <label htmlFor="letterFilter">Select Letter</label>
    <select
      id="letterFilter"
      className="form-control"
      value={value}
      onChange={onChange}>
      { LETTERS.map((option) => (
        <option key={option} value={option}>{option.toUpperCase()}</option>
      )) }
    </select>
  </div>
);

LetterFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

LetterFilter.defaultProps = {
  value: '',
  onChange: () => {},
};

export default LetterFilter;
