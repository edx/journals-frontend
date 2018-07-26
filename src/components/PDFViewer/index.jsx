import React from 'react';
import PropTypes from 'prop-types';

const PDFViewer = props => (
  <div>{props.title}</div>
);

PDFViewer.defaultProps = {
  title: '',
};

PDFViewer.propTypes = {
  title: PropTypes.string,
};

export default PDFViewer;
