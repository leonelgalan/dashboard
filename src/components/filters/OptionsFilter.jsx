import React from 'react';
import PropTypes from 'prop-types';

import { LETTERS } from '../../filter';

const OptionsFilter = ({ value, onChange }) => (
  <div className="form-group col-md-3">
    <label htmlFor="optionsFilter">Options</label>
    <select
      id="optionsFilter"
      multiple
      className="form-control"
      value={value}
      onChange={onChange}>
      { LETTERS.map((option) => (
        <option key={option} value={option}>
          { `Option ${option.toUpperCase()}`}
        </option>
      )) }
    </select>
  </div>
);

OptionsFilter.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

OptionsFilter.defaultProps = {
  value: [],
  onChange: () => {},
};

export default OptionsFilter;
