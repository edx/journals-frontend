import React from 'react';
import PropTypes from 'prop-types';

const RawHTMLViewer = props => (
  /* eslint-disable react/no-danger */
  <div dangerouslySetInnerHTML={{ __html: props.content }} />
  /* eslint-enable react/no-danger */
);

RawHTMLViewer.defaultProps = {
  content: <div />,
};

RawHTMLViewer.propTypes = {
  content: PropTypes.string,
};

export default RawHTMLViewer;
