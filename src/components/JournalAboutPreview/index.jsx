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
          heroImageUrl: this.props.previewPage.heroImageUrl,
          shortDescription: this.props.previewPage.shortDescription,
          longDescription: this.props.previewPage.longDescription,
          customContent: this.props.previewPage.customContent,
          journalAboutId: this.props.previewPage.id,
          journalId: this.props.previewPage.journalId,
          purchaseUrl: this.props.previewPage.purchaseUrl,
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
    shortDescription: PropTypes.string,
    longDescription: PropTypes.string,
    heroImageUrl: PropTypes.string,
    customContent: PropTypes.string,
    id: PropTypes.number,
    journalId: PropTypes.number,
    purchaseUrl: PropTypes.string,
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
