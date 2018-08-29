import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header';
import fetchSiteInfo from '../../data/actions/siteInfo';
import { toggleNavigationOpen } from '../../data/actions/navigation';

const mapStateToProps = state => (
  {
    themeName: state.siteInfo.themeName,
    navPanelOpen: state.navigation.open,
    isAuthenticated: state.siteInfo.isAuthenticated,
    journalId: state.journal.journalId,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getSiteInfo: () => dispatch(fetchSiteInfo()),
    toggleNavigationOpen: () => dispatch(toggleNavigationOpen()),
  }
);

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default withRouter(HeaderContainer);
