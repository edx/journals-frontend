import React from 'react';
import PropTypes from 'prop-types';

import JournalIndexPage from '../JournalIndexPage';

class JournalIndexPreview extends React.Component {
  componentDidMount() {
    this.props.getPreview(this.props.match.params.previewId);
    this.props.getJournals();
  }

  render() {
    return (
      this.props.finishedFetchingIndex && this.props.finishedFetching ? (
        <JournalIndexPage
          isPreview={this.props.isPreview}
          finishedFetchingIndex={this.props.finishedFetchingIndex}
          finishedFetching={this.props.finishedFetching}
          serverBaseUrl={this.props.serverBaseUrl}
          authorizedJournals={this.props.authorizedJournals}
          journalIndex={{
            title: this.props.previewPage.title,
            intro: this.props.previewPage.intro,
            hero_image_url: this.props.previewPage.hero_image_url,
          }}
          journals={this.props.journals}
        />
      ) : (
        'Loading...'
      )
    );
  }
}

JournalIndexPreview.defaultProps = {
  authorizedJournals: [],
  getPreview: () => {},
  getJournals: () => {},
  finishedFetchingIndex: false,
  finishedFetching: false,
  serverBaseUrl: '',
  isPreview: true,
  journals: [],
};

JournalIndexPreview.propTypes = {
  previewPage: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    intro: PropTypes.string,
    hero_image_url: PropTypes.string,
  }).isRequired,
  serverBaseUrl: PropTypes.string,
  authorizedJournals: PropTypes.arrayOf(PropTypes.number),
  getPreview: PropTypes.func,
  getJournals: PropTypes.func,
  journals: PropTypes.arrayOf(PropTypes.object),
  match: PropTypes.shape({
    params: PropTypes.shape({
      previewId: PropTypes.string,
    }),
    url: PropTypes.string,
  }).isRequired,
  finishedFetchingIndex: PropTypes.bool,
  finishedFetching: PropTypes.bool,
  isPreview: PropTypes.bool,
};


export default JournalIndexPreview;
