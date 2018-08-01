import React from 'react';
import PropTypes from 'prop-types';

const RawHTMLViewer = props => (
  <div dangerouslySetInnerHTML={{ __html: props.content }} /> // eslint-disable-line react/no-danger
);

RawHTMLViewer.propTypes = {
  content: PropTypes.string.isRequired,
};

export default RawHTMLViewer;
