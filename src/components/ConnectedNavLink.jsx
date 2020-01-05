import React from 'react';
import propTypes from 'prop-types';
import { Route, NavLink } from 'react-router-dom';

const ConnectedNavLink = ({ exact, to, children, ...rest }) => (
  <Route
    path={to}
    exact={exact}
      // eslint-disable-next-line react/no-children-prop
    children={({ match }) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <NavLink exact={exact} {...rest} to={(location) => `${to}${location.search}`}>
        { children }
        { !!match && <span className="sr-only">(current)</span>}
      </NavLink>
    )} />
);

ConnectedNavLink.propTypes = {
  ...NavLink.propTypes,
  to: propTypes.string.isRequired,
};

export default ConnectedNavLink;
