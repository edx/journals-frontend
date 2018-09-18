import { connect } from 'react-redux';

import NavigationPanel from '../../components/NavigationPanel';
import { toggleNavigationOpen } from '../../data/actions/navigation';

const mapStateToProps = state => (
  {
    navPanelOpen: state.navigation.open,
    navPanelVisible: state.navigation.visible,
    journalFinishedFetching: state.journal.finishedFetching,
    journal: state.journal,
    currentPageId: state.page.page.id,
  }
);

const mapDispatchToProps = dispatch => (
  {
    toggleNavigationOpen: () => dispatch(toggleNavigationOpen()),
  }
);

const NavigationPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationPanel);

export default NavigationPanelContainer;
