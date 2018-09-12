import { connect } from 'react-redux';

import JournalIndexPreview from '../../components/JournalIndexPreview';
import { fetchJournals } from '../../data/actions/journals';
import fetchPreview from '../../data/actions/preview';


const mapStateToProps = state => (
  {
    journals: state.journals.journals,
    finishedFetching: state.journals.finishedFetching,
    previewPage: state.preview.page,
    finishedFetchingIndex: state.preview.finishedFetching,
    authorizedJournals: state.siteInfo.authorizedJournals,
    serverBaseUrl: state.siteInfo.serverBaseUrl,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getPreview: previewId => dispatch(fetchPreview(previewId)),
    getJournals: () => dispatch(fetchJournals()),
  }
);

const JournalIndexPreviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(JournalIndexPreview);

export default JournalIndexPreviewContainer;
