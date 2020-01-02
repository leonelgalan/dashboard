import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextFilter = ({ value, onChange }) => {
  const [text, setText] = useState(value);

  const handleChange = (event) => {
    const { value: eventValue } = event.target;
    setText(eventValue);
  };

  const handleSearch = () => {
    onChange({ value: text });
  };

  return (
    <div className="form-group col-md-3">
      <label htmlFor="queryFilter">Search</label>
      <div className="input-group">
        <input
          type="text"
          id="queryFilter"
          className="form-control"
          value={text}
          onChange={handleChange}
          placeholder="Search"
          aria-label="Search Query"
          aria-describedby="button-addon" />
        <div className="input-group-append">
          <button
            type="button"
            id="button-addon"
            className="btn btn-outline-secondary"
            onClick={handleSearch}>
            <span role="img" aria-label="Search Icon">&#x1F50E;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

TextFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

TextFilter.defaultProps = {
  value: '',
  onChange: () => {},
};

export default TextFilter;
