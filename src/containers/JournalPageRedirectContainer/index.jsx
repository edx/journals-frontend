import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import JournalPageRedirect from '../../components/JournalPageRedirect';


const mapStateToProps = state => (
  {
    siteInfoFinishedFetching: state.siteInfo.finishedFetching,
    journalFinishedFetching: state.journal.finishedFetching,
    journalFirstPage: state.journal.structure.length !== 0 ? state.journal.structure[0].id : null,
    visitedPages: state.siteInfo.visitedPages,
    journalAboutId: state.journal.journalAboutId,
  }
);

const mapDispatchToProps = () => ({

});

const JournalPageRedirectContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(JournalPageRedirect);

export default withRouter(JournalPageRedirectContainer);
