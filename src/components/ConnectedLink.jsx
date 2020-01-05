import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ConnectedLink = ({ to, children, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Link {...rest} to={(location) => `${to}${location.search}`}>
    { children }
  </Link>
);

ConnectedLink.propTypes = {
  ...Link.propTypes,
  to: propTypes.string.isRequired,
};

export default ConnectedLink;
