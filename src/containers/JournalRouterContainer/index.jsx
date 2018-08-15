import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import JournalRouter from '../../components/JournalRouter';
import fetchJournal from '../../data/actions/journal';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => (
  {
    getJournal: pageId => dispatch(fetchJournal(pageId)),
  }
);

const JournalRouterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(JournalRouter);

export default withRouter(JournalRouterContainer);
