import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.scss';

class Header extends React.Component {
  componentDidMount() {
    this.props.getSiteInfo();
  }
  render() {
    const stylesheet = `${this.props.themeName}-app.css`;
    return (
      <div className="header">
        {
          this.props.themeName &&
          <Helmet>
            <link rel="stylesheet" href={stylesheet} />
          </Helmet>
        }
        <div>
          <Link to="/">
            <img className="site-logo" alt="site logo" src={this.props.siteLogo} />
          </Link>
          <span>{this.props.journalName}</span>
        </div>
        <div className="account-info">
          {
            this.props.isAuthenticated ? (
              <span>{this.props.username}</span>
            ) : (
              <a href={this.props.loginPath}>Login</a>
            )
          }
        </div>

      </div>
    );
  }
}

Header.defaultProps = {
  username: '',
  isAuthenticated: false,
  loginPath: '',
  getSiteInfo: () => {},
  siteLogo: '',
  journalName: '',
  themeName: '',
};

Header.propTypes = {
  username: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  loginPath: PropTypes.string,
  getSiteInfo: PropTypes.func,
  siteLogo: PropTypes.string,
  journalName: PropTypes.string,
  themeName: PropTypes.string,
};

export default Header;
