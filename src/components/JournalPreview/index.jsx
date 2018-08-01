import React from 'react';
import PropTypes from 'prop-types';

import JournalPage from '../JournalPage';

class JournalPreview extends React.Component {
  componentDidMount() {
    this.props.getPreview(this.props.match.params.previewId);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.previewId !== this.props.match.params.previewId) {
      this.props.getPreview(this.props.match.params.previewId);
    }
  }

  render() {
    return (
      <JournalPage
        match={this.props.match}
        fetchPreviewSuccess={this.props.fetchPreviewSuccess}
        is_preview
        title={this.props.title}
        body={this.props.body}
      />
    );
  }
}

JournalPreview.defaultProps = {
  title: '',
  body: [],
  getPreview: () => {},
  fetchPreviewSuccess: false,
};

JournalPreview.propTypes = {
  title: PropTypes.string,
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
