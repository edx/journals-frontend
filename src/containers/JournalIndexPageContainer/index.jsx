import { connect } from 'react-redux';

import JournalIndexPage from '../../components/JournalIndexPage';
import { fetchJournals, fetchJournalIndexPage } from '../../data/actions/journals';
import { resetJournal, useExistingJournal } from '../../data/actions/journal';
import { toggleNavigationVisibility } from '../../data/actions/navigation';

const mapStateToProps = state => (
  {
    journals: state.journals.journals,
    journalIndex: state.journals.journalIndex,
    finishedFetching: state.journals.finishedFetching,
    finishedFetchingIndex: state.journals.finishedFetchingIndex,
    serverBaseUrl: state.siteInfo.serverBaseUrl,
    authorizedJournals: state.siteInfo.authorizedJournals,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getJournalIndex: () => dispatch(fetchJournalIndexPage()),
    getJournals: () => dispatch(fetchJournals()),
    toggleNavigationVisibility: val => dispatch(toggleNavigationVisibility(val)),
    useExistingJournal: journal => dispatch(useExistingJournal(journal)),
    resetJournal: () => dispatch(resetJournal()),
  }
);

const JournalIndexPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(JournalIndexPage);

export default JournalIndexPageContainer;
