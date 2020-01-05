import React from 'react';
import PropTypes from 'prop-types';

import { DEFAULT_FILTERS } from '../filter';

const SelectedLetter = ({ letter }) => (
  <p>{ `Selected Letter: ${letter.toUpperCase()}` }</p>
);

SelectedLetter.propTypes = {
  letter: PropTypes.string,
};

SelectedLetter.defaultProps = {
  letter: DEFAULT_FILTERS.letter,
};

export default SelectedLetter;
