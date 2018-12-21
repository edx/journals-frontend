import React from 'react';
import PropTypes from 'prop-types';

import JournalAboutPage from '../JournalAboutPage';

class JournalAboutPreview extends React.Component {
  componentDidMount() {
    this.props.getPreview(this.props.match.params.previewId);
  }

  render() {
    return (
      <JournalAboutPage
        journal={{
          finishedFetching: this.props.finishedFetching,
          title: this.props.previewPage.title,
          heroImageUrl: this.props.previewPage.hero_image_url,
          shortDescription: this.props.previewPage.short_description,
          longDescription: this.props.previewPage.long_description,
          customContent: this.props.previewPage.custom_content,
          journalAboutId: this.props.previewPage.id,
          journalId: this.props.previewPage.journal_id,
          purchaseUrl: this.props.previewPage.purchase_url,
          price: this.props.previewPage.price,
          accessLength: this.props.previewPage.accessLength,
        }}
        serverBaseUrl={this.props.serverBaseUrl}
        authorizedJournals={this.props.authorizedJournals}
      />
    );
  }
}

JournalAboutPreview.defaultProps = {
  authorizedJournals: [],
  getPreview: () => {},
  finishedFetching: false,
  serverBaseUrl: '',
};

JournalAboutPreview.propTypes = {
  previewPage: PropTypes.shape({
    title: PropTypes.string,
    short_description: PropTypes.string,
    long_description: PropTypes.string,
    hero_image_url: PropTypes.string,
    custom_content: PropTypes.string,
    id: PropTypes.number,
    journal_id: PropTypes.number,
    purchase_url: PropTypes.string,
    price: PropTypes.string,
    accessLength: PropTypes.number,
  }).isRequired,
  serverBaseUrl: PropTypes.string,
  authorizedJournals: PropTypes.arrayOf(PropTypes.number),
  getPreview: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      previewId: PropTypes.string,
    }),
    url: PropTypes.string,
  }).isRequired,
  finishedFetching: PropTypes.bool,
};


export default JournalAboutPreview;
