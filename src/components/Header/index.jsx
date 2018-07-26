import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.scss';

class Header extends React.Component {
  componentDidMount() {
    this.props.getUserInfo();
  }
  render() {
    return (
      <div className="header">
        <h3>
          <Link to="/">Home</Link>
        </h3>
        {
          this.props.isAuthenticated ? (
            <span>{this.props.username}</span>
          ) : (
            <a href={this.props.loginPath}>Login</a>
          )
        }
      </div>
    );
  }
}

Header.defaultProps = {
  username: '',
  isAuthenticated: false,
  loginPath: '',
  getUserInfo: () => {},
};

Header.propTypes = {
  username: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  loginPath: PropTypes.string,
  getUserInfo: PropTypes.func,
};

export default Header;
