import React from 'react';
import PropTypes from 'prop-types';

const SelectedLetter = ({ letter }) => (
  <p>{ `Selected Letter: ${letter.toUpperCase()}` }</p>
);

SelectedLetter.propTypes = {
  letter: PropTypes.string.isRequired,
};

export default SelectedLetter;
