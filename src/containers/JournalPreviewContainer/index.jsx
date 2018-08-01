import { connect } from 'react-redux';

import JournalPreview from '../../components/JournalPreview';
import fetchPreview from '../../data/actions/preview';


const mapStateToProps = state => (
  {
    title: state.preview.page.title,
    body: state.preview.page.body,
    fetchPreviewSuccess: state.preview.error,
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
