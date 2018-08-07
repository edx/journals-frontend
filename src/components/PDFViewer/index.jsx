import React from 'react';
import PropTypes from 'prop-types';

// TODO: get from site branding
import settings from '../../data/configuration/constants';

import './PDFViewer.scss';

const getIFrameUrl = relativeUrl => (
  `${settings.journalsBackendBaseUrl}/static/pdf_js/web/viewer.html?file=${relativeUrl}`
);

const PDFViewer = props => (
  <div className="embed-responsive responsive-pdf">
    <iframe
      title={props.title}
      className="embed-responsive-item"
      src={getIFrameUrl(props.url)}
    />
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
