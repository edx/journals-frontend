import { connect } from 'react-redux';

import JournalPreview from '../../components/JournalPreview';
import fetchPreview from '../../data/actions/preview';


const mapStateToProps = state => (
  {
    title: state.preview.page.title,
    subTitle: state.preview.page.sub_title,
    displayLastPublishedDate: state.preview.page.display_last_published_date,
    lastPublishedDate: state.preview.page.last_published_at,
    author: state.preview.page.author,
    breadCrumbs: state.preview.page.bread_crumbs,
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
