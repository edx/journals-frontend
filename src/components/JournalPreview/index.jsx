import React from 'react';
import PropTypes from 'prop-types';

import JournalPage from '../JournalPage';

class JournalPreview extends React.Component {
  componentDidMount() {
    this.props.getPreview(this.props.match.params.previewId);
  }

  render() {
    return (
      <JournalPage
        match={this.props.match}
        fetchPreviewSuccess={this.props.fetchPreviewSuccess}
        is_preview
        title={this.props.title}
        subTitle={this.props.subTitle}
        displayLastPublishedDate={this.props.displayLastPublishedDate}
        lastPublishedDate={this.props.lastPublishedDate}
        author={this.props.author}
        breadCrumbs={this.props.breadCrumbs}
        body={this.props.body}
      />
    );
  }
}

JournalPreview.defaultProps = {
  title: '',
  subTitle: '',
  displayLastPublishedDate: false,
  lastPublishedDate: '',
  author: '',
  breadCrumbs: [],
  body: [],
  getPreview: () => {},
  fetchPreviewSuccess: false,
};

JournalPreview.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  displayLastPublishedDate: PropTypes.bool,
  lastPublishedDate: PropTypes.string,
  author: PropTypes.string,
  breadCrumbs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  })),
  body: PropTypes.arrayOf(PropTypes.object),
  getPreview: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      previewId: PropTypes.string,
    }),
    url: PropTypes.string,
  }).isRequired,
  fetchPreviewSuccess: PropTypes.bool,
};


export default JournalPreview;
