import { connect } from 'react-redux';

import Header from '../../components/Header';
import fetchSiteInfo from '../../data/actions/siteInfo';

const mapStateToProps = state => (
  {
    username: state.siteInfo.username,
    isAuthenticated: state.siteInfo.isAuthenticated,
    loginPath: `${state.siteInfo.serverBaseUrl}/require_auth?forward=${encodeURI(window.location.href)}`,
    siteLogo: `${state.siteInfo.serverBaseUrl}${state.siteInfo.logo}`,
    journalName: state.journal.title,
    themeName: state.siteInfo.themeName,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getSiteInfo: () => dispatch(fetchSiteInfo()),
  }
);

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;
