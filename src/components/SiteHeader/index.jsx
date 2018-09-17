import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Dropdown, Hyperlink, Icon } from '@edx/paragon';

import SearchBar from '../SearchBar';

import './SiteHeader.scss';


class SiteHeader extends React.Component {
  getMenuItems() {
    const menuList = [];
    menuList.push({ label: <span><Icon className="fa fa-user" />My Account</span>, href: this.props.lmsAccountPath });
    if (this.props.canAccessAdmin) {
      menuList.push(<a href={this.props.cmsPath} target="_blank" rel="noopener noreferrer"><span><Icon className="fa fa-pencil-square-o" />Journal Editor</span></a>);
    }
    menuList.push({ label: 'Logout', href: this.props.logoutPath });
    return menuList;
  }

  render() {
    return (
      <div className={`site-header ${this.props.className}`}>
        <div>
          <Link className="site-logo-link" to="/">
            <img className="site-logo" alt="site logo" src={this.props.siteLogo} />
          </Link>
          <span className="d-none d-md-inline">{this.props.journalName}</span>
        </div>
        <div className="header-actions">
          {
            this.props.isAuthenticated &&
              <span className="d-none d-sm-inline-block">
                <SearchBar journalId={this.props.journalId} history={this.props.history} />
              </span>
          }
          {
            this.props.isAuthenticated ? (
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
                  menuItems={this.getMenuItems()}
                />
              </div>
            ) : (
              <Hyperlink className="btn control-btn" destination={this.props.loginPath} content="Login" />
            )
          }
        </div>
      </div>
    );
  }
}

SiteHeader.defaultProps = {
  isAuthenticated: false,
  journalId: 0,
  journalName: '',
  lmsAccountPath: '',
  loginPath: '',
  logoutPath: '',
  siteLogo: '',
  className: '',
  cmsPath: '',
  canAccessAdmin: false,
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
  cmsPath: PropTypes.string,
  canAccessAdmin: PropTypes.bool,
};

export default SiteHeader;
