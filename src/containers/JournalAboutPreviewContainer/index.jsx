import { connect } from 'react-redux';

import JournalAboutPreview from '../../components/JournalAboutPreview';
import fetchPreview from '../../data/actions/preview';


const mapStateToProps = state => (
  {
    previewPage: {
      title: state.preview.page.title,
      shortDescription: state.preview.page.short_description,
      longDescription: state.preview.page.long_description,
      heroImageUrl: state.preview.page.hero_image_url,
      customContent: state.preview.page.custom_content,
      id: state.preview.page.id,
      journalId: state.preview.page.journal_id,
      purchaseUrl: state.preview.page.purchase_url,
      price: state.preview.page.price,
      accessLength: state.preview.page.accessLength,
    },
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
