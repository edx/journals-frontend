import React from 'react';
import PropTypes from 'prop-types';

// TODO: get from site branding
import settings from '../../data/configuration/constants';

import './PDFViewer.scss';

const getIFrameUrl = relativeUrl => (
  `${settings.journalsBackendBaseUrl}/static/pdf_js/web/viewer.html?file=${relativeUrl}`
);

const PDFViewer = props => (
  // If the title is an empty string do not display one
  <iframe
    title={props.title}
    className="imported-pdf embed-responsive-item"
    src={getIFrameUrl(props.url)}
  />
);

PDFViewer.defaultProps = {
  title: '',
};

PDFViewer.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default PDFViewer;
