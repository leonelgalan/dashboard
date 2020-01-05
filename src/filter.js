import PropTypes from 'prop-types';
import { StringParam, ArrayParam, BooleanParam } from 'use-query-params';

export const FILTERS = ['letter', 'options', 'yes', 'query'];

export const LETTERS = ['a', 'b', 'c'];

export const DEFAULT_FILTERS = {
  letter: 'a',
  options: [],
  text: '',
  yes: false,
};

export const filterProps = {
  letter: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string,
  yes: PropTypes.bool,
};

export const urlParams = {
  text: StringParam,
  options: ArrayParam,
  letter: StringParam,
  yes: BooleanParam,
};
