import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SiteHeader from '../../components/SiteHeader';

const mapStateToProps = state => (
  {
    isAuthenticated: state.siteInfo.isAuthenticated,
    journalIndexId: state.journals.journalIndex.id,
    journalAboutId: state.journal.journalAboutId,
    journalId: state.journal.journalId,
    journalName: state.journal.title,
    pageId: state.page.page.id,
    lmsAccountPath: `${state.siteInfo.lmsRootUrl}/account/settings`,
    loginPath: `${state.siteInfo.serverBaseUrl}/require_auth?forward=${encodeURI(window.location.href)}`,
    logoutPath: `${state.siteInfo.serverBaseUrl}/logout`,
    siteLogo: state.siteInfo.logo,
    canAccessAdmin: state.siteInfo.canAccessAdmin,
    cmsPath: `${state.siteInfo.serverBaseUrl}/cms`,
    finishedFetching: state.siteInfo.finishedFetching,
    lmsIntegration: state.siteInfo.lmsIntegration,
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
