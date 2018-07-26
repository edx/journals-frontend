import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import settings from '../../data/configuration/constants';


class PrivateRoute extends React.Component {
  getUnusedProps({
    component: Component,
    isAuthenticated,
    userInfoFinishedFetching,
    ...rest
  }) {
    return rest;
  }

  render() {
    const loginUrl = `${settings.journalsBackendBaseUrl}/require_auth?forward=${encodeURI(window.location.href)}`;

    if (this.props.userInfoFinishedFetching) {
      if (this.props.isAuthenticated === true) {
        return <Route {...this.getUnusedProps(this.props)} component={this.props.component} />;
      }
      window.location.href = loginUrl;
      return <div>Redirecting...</div>;
    }
    return <div>Loading...</div>;
  }
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  userInfoFinishedFetching: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({
        pathname: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default PrivateRoute;
