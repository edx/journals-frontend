import { connect } from 'react-redux';

import JournalAboutPreview from '../../components/JournalAboutPreview';
import fetchPreview from '../../data/actions/preview';


const mapStateToProps = state => (
  {
    previewPage: state.preview.page,
    finishedFetching: state.preview.finishedFetching,
    authorizedJournals: state.siteInfo.authorizedJournals,
    serverBaseUrl: state.siteInfo.serverBaseUrl,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getPreview: previewId => dispatch(fetchPreview(previewId)),
  }
);

const JournalAboutPreviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(JournalAboutPreview);

export default JournalAboutPreviewContainer;
