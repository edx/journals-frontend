import { connect } from 'react-redux';

import JournalPreview from '../../components/JournalPreview';
import fetchPreview from '../../data/actions/preview';


const mapStateToProps = state => (
  {
    title: state.preview.page.title,
    subTitle: state.preview.page.subTitle,
    displayLastPublishedDate: state.preview.page.displayLastPublishedDate,
    lastPublishedDate: state.preview.page.lastPublishedDate,
    author: state.preview.page.author,
    breadCrumbs: state.preview.page.breadCrumbs,
    body: state.preview.page.body,
    error: state.preview.error,
    startedFetching: state.preview.startedFetching,
    finishedFetching: state.preview.finishedFetching,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getPreview: previewId => dispatch(fetchPreview(previewId)),
  }
);

const JournalPreviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(JournalPreview);

export default JournalPreviewContainer;
