import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import JournalRouter from '../../components/JournalRouter';
import fetchJournal from '../../data/actions/journal';
import { toggleNavigationVisibility } from '../../data/actions/navigation';

const mapStateToProps = state => ({
  isAuthenticated: state.siteInfo.isAuthenticated,
});

const mapDispatchToProps = dispatch => (
  {
    getJournal: pageId => dispatch(fetchJournal(pageId)),
    toggleNavigationVisibility: val => dispatch(toggleNavigationVisibility(val)),
  }
);

const JournalRouterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(JournalRouter);

export default withRouter(JournalRouterContainer);
