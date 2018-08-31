import React from 'react';

import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { Button, Icon } from '@edx/paragon';
import classNames from 'classnames';

import MobileNavigationContainer from '../../containers/MobileNavigationContainer';
import SiteHeaderContainer from '../../containers/SiteHeaderContainer';
import SearchBar from '../SearchBar';
import './Header.scss';

const MobileControl = props => (
  <div className="mobile-control d-flex d-sm-none">
    {
      props.navPanelOpen &&
      <div className="mobile-toc-header">
        <Button
          className={['control-btn']}
          label={<Icon className="fa fa-times" />}
          onClick={() => { props.toggleNavigationOpen(); }}
        />
        <span>Contents</span>
      </div>
    }
    {
      props.searchOpen &&
      <div>
        <SearchBar journalId={props.journalId} history={props.history} />
        <Button
          className={['close-btn']}
          label="Close"
          onClick={() => props.updateSearchOpen(false)}
        />
      </div>
    }
  </div>
);

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.updateSearchOpen = this.updateSearchOpen.bind(this);
    this.shouldMobileControlOpen = this.shouldMobileControlOpen.bind(this);
    this.state = {
      searchOpen: false,
    };
  }

  componentDidMount() {
    this.props.getSiteInfo();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.location.pathname !== prevProps.location.pathname &&
      this.props.navPanelOpen &&
      window.matchMedia('(max-width: 575px)').matches
    ) {
      this.props.toggleNavigationOpen();
    }
  }

  shouldMobileControlOpen() {
    return (
      this.state.searchOpen || this.props.navPanelOpen
    );
  }

  updateSearchOpen(value) {
    this.setState({
      searchOpen: value,
    });
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
        <SiteHeaderContainer
          updateSearchOpen={this.updateSearchOpen}
          className={classNames({
            'd-none d-sm-flex': this.shouldMobileControlOpen(),
          })}
        />
        {
          !this.shouldMobileControlOpen() &&
          this.props.isAuthenticated &&
          <MobileNavigationContainer
            updateSearchOpen={this.updateSearchOpen}
          />
        }
        {
          this.shouldMobileControlOpen() &&
          <MobileControl
            searchOpen={this.state.searchOpen}
            updateSearchOpen={this.updateSearchOpen}
            navPanelOpen={this.props.navPanelOpen}
            toggleNavigationOpen={this.props.toggleNavigationOpen}
            journalId={this.props.journalId}
            history={this.props.history}
          />
        }
      </div>
    );
  }
}

MobileControl.defaultProps = {
  searchOpen: false,
  navPanelOpen: false,
  updateSearchOpen: () => {},
  toggleNavigationOpen: () => {},
};

MobileControl.propTypes = {
  searchOpen: PropTypes.bool,
  navPanelOpen: PropTypes.bool,
  updateSearchOpen: PropTypes.func,
  toggleNavigationOpen: PropTypes.func,
  journalId: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

Header.defaultProps = {
  getSiteInfo: () => {},
  toggleNavigationOpen: () => {},
  themeName: '',
  navPanelOpen: false,
  isAuthenticated: false,
  journalId: 0,
  location: { pathname: '' },
};

Header.propTypes = {
  getSiteInfo: PropTypes.func,
  toggleNavigationOpen: PropTypes.func,
  themeName: PropTypes.string,
  navPanelOpen: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  journalId: PropTypes.number,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

export default Header;
