import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Dropdown, Hyperlink, Icon } from '@edx/paragon';

import SearchBar from '../SearchBar';

import './SiteHeader.scss';


const SiteHeader = props => (
  <div className={`site-header ${props.className}`}>
    <div>
      <Link to="/">
        <img className="site-logo" alt="site logo" src={props.siteLogo} />
      </Link>
      <span className="d-none d-md-inline">{props.journalName}</span>
    </div>
    <div className="header-actions">
      {
        props.isAuthenticated &&
          <span className="d-none d-sm-inline-block">
            <SearchBar journalId={props.journalId} history={props.history} />
          </span>
      }
      {
        props.isAuthenticated ? (
          <div className="account-info">
            <Dropdown
              className="control-btn"
              title={
                <div>
                  <Icon className="fa fa-user" />
                  <span>Account</span>
                </div>
              }
              buttonType={null}
              menuItems={
                [
                  { label: <span><Icon className="fa fa-user" />My Account</span>, href: props.lmsAccountPath },
                  { label: 'Logout', href: props.logoutPath },
                ]
              }
            />
          </div>
        ) : (
          <Hyperlink className="btn control-btn" destination={props.loginPath} content="Login" />
        )
      }
    </div>
  </div>
);

SiteHeader.defaultProps = {
  isAuthenticated: false,
  journalId: 0,
  journalName: '',
  lmsAccountPath: '',
  loginPath: '',
  logoutPath: '',
  siteLogo: '',
  className: '',
};

SiteHeader.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  isAuthenticated: PropTypes.bool,
  journalId: PropTypes.number,
  journalName: PropTypes.string,
  lmsAccountPath: PropTypes.string,
  loginPath: PropTypes.string,
  logoutPath: PropTypes.string,
  siteLogo: PropTypes.string,
  className: PropTypes.string,
};

export default SiteHeader;
