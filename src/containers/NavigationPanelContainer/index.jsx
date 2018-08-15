import { connect } from 'react-redux';

import NavigationPanel from '../../components/NavigationPanel';

const mapStateToProps = state => (
  {
    navPanelOpen: state.navigation.open,
    navPanelVisible: state.navigation.visible,
    journalFinishedFetching: state.journal.finishedFetching,
    journal: state.journal,
  }
);

const mapDispatchToProps = () => (
  {
  }
);

const NavigationPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationPanel);

export default NavigationPanelContainer;
