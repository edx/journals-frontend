import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SiteHeader from '../../components/SiteHeader';

const mapStateToProps = state => (
  {
    isAuthenticated: state.siteInfo.isAuthenticated,
    journalId: state.journal.journalId,
    journalName: state.journal.title,
    lmsAccountPath: `${state.siteInfo.lmsRootUrl}/account/settings`,
    loginPath: `${state.siteInfo.serverBaseUrl}/require_auth?forward=${encodeURI(window.location.href)}`,
    logoutPath: `${state.siteInfo.serverBaseUrl}/logout`,
    siteLogo: `${state.siteInfo.serverBaseUrl}${state.siteInfo.logo}`,
  }
);

const mapDispatchToProps = () => (
  {
  }
);

const SiteHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SiteHeader);

export default withRouter(SiteHeaderContainer);
