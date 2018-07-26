import React from 'react';
import PropTypes from 'prop-types';

// TODO: get from site branding
import settings from '../../data/configuration/constants';

const PDFViewer = props => (
  <div>
    <div>{props.title}</div>
    <div>{`${settings.journalsBackendBaseUrl}${props.url}`}</div>
  </div>
);

PDFViewer.defaultProps = {
  title: '',
};

PDFViewer.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default PDFViewer;
