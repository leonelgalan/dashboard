import React from 'react';
import PropTypes from 'prop-types';

const YesFilter = ({ value, onChange }) => (
  <div className="form-group col-md-3">
    <div className="form-check">
      <input
        id="featuredFilter"
        type="checkbox"
        className="form-check-input"
        checked={value}
        onChange={onChange} />
      <label className="form-check-label" htmlFor="featuredFilter">
        Yes
      </label>
    </div>
  </div>
);

YesFilter.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
};

YesFilter.defaultProps = {
  value: false,
  onChange: () => {},
};

export default YesFilter;
