import { connect } from 'react-redux';

import NavigationPanel from '../../components/NavigationPanel';
import fetchJournal from '../../data/actions/journal';

const mapStateToProps = state => (
  {
    navPanelOpen: state.navigation.open,
    journalFinishedFetching: state.journal.finishedFetching,
    journal: state.journal,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getJournal: pageId => dispatch(fetchJournal(pageId)),
  }
);

const NavigationPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavigationPanel);

export default NavigationPanelContainer;
