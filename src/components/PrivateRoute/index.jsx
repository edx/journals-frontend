import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';


class PrivateRoute extends React.Component {
  getUnusedProps({
    component: Component,
    isAuthenticated,
    siteInfoFinishedFetching,
    ...rest
  }) {
    return rest;
  }

  render() {
    if (this.props.siteInfoFinishedFetching) {
      if (this.props.isAuthenticated === true) {
        return <Route {...this.getUnusedProps(this.props)} component={this.props.component} />;
      }
      window.location.href = this.props.loginPath;
      return <div>Redirecting...</div>;
    }
    return <div>Loading...</div>;
  }
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  siteInfoFinishedFetching: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({
        pathname: PropTypes.string,
      }),
    }),
  }).isRequired,
  loginPath: PropTypes.string.isRequired,
};

export default PrivateRoute;
