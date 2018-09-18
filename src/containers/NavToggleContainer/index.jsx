import { connect } from 'react-redux';

import NavToggle from '../../components/NavToggle';
import { toggleNavigationOpen } from '../../data/actions/navigation';

const mapStateToProps = state => (
  {
    navPanelOpen: state.navigation.open,
    navPanelVisible: state.navigation.visible,
    journalFinishedFetching: state.journal.finishedFetching,
    journalId: state.journal.journalId,
    authorizedJournals: state.siteInfo.authorizedJournals,
  }
);

const mapDispatchToProps = dispatch => (
  {
    toggleNavigationOpen: () => dispatch(toggleNavigationOpen()),
  }
);

const NavToggleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavToggle);

export default NavToggleContainer;
