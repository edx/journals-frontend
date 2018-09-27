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
        error={this.props.error}
        startedFetching={this.props.startedFetching}
        finishedFetching={this.props.finishedFetching}
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
  error: null,
  startedFetching: false,
  finishedFetching: false,
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
  error: PropTypes.instanceOf(Error),
  startedFetching: PropTypes.bool,
  finishedFetching: PropTypes.bool,
};


export default JournalPreview;
