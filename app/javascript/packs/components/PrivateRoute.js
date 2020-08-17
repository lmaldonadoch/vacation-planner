import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
/* eslint-disable react/jsx-props-no-spreading */

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userState = useSelector(state => state.user);

  if (rest.path.includes('/add-destination')) {
    return (
      <Route
        {...rest}
        render={props => (userState.loggedIn && userState.user.admin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        ))}
      />
    );
  }

  return (
    <Route
      {...rest}
      render={props => (userState.loggedIn ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
