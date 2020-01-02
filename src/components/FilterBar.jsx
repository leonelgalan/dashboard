import React from 'react';
import PropTypes from 'prop-types';

import { filterProps, DEFAULT_FILTERS } from '../filter';
import {
  TextFilter, LetterFilter, OptionsFilter, YesFilter,
} from './filters';

const FilterBar = ({
  letter,
  options,
  text,
  yes,
  onChangeLetter,
  onChangeOptions,
  onChangeText,
  onChangeYes,
}) => {
  const handleTextChange = ({ value }) => {
    onChangeText(value);
  };

  const handleLetterChange = (event) => {
    const { value } = event.target;
    onChangeLetter(value);
  };

  const handleOptionsChange = (event) => {
    const { options: allOptions } = event.target;
    const selectedOptionsValues = [...allOptions].filter((x) => x.selected).map((x) => x.value);
    onChangeOptions(selectedOptionsValues);
  };

  const handleYesChange = (event) => {
    const { checked } = event.target;
    onChangeYes(checked);
  };

  return (
    <div className="row bg-light">
      <TextFilter value={text} onChange={handleTextChange} />
      <LetterFilter value={letter} onChange={handleLetterChange} />
      <OptionsFilter value={options} onChange={handleOptionsChange} />
      <YesFilter value={yes} onChange={handleYesChange} />
    </div>
  );
};

FilterBar.propTypes = {
  ...filterProps,
  onChangeLetter: PropTypes.func,
  onChangeOptions: PropTypes.func,
  onChangeText: PropTypes.func,
  onChangeYes: PropTypes.func,
};

FilterBar.defaultProps = {
  ...DEFAULT_FILTERS,
  onChangeLetter: () => {},
  onChangeOptions: () => {},
  onChangeText: () => {},
  onChangeYes: () => {},
};

export default FilterBar;
