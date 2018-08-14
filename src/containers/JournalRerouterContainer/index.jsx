import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import JournalRerouter from '../../components/JournalRerouter';
import fetchJournal from '../../data/actions/journal';


const mapStateToProps = state => (
  {
    siteInfoFinishedFetching: state.siteInfo.finishedFetching,
    journalFinishedFetching: state.journal.finishedFetching,
    journalFirstPage: state.journal.structure.length !== 0 ? state.journal.structure[0].id : null,
    lastVisitedPage: (
      state.siteInfo.visitedPages.length !== 0 ?
        state.siteInfo.visitedPages[0].page :
        null
    ),
  }
);

const mapDispatchToProps = dispatch => (
  {
    getJournal: pageId => dispatch(fetchJournal(pageId)),
  }
);

const JournalRerouterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(JournalRerouter);

export default withRouter(JournalRerouterContainer);
