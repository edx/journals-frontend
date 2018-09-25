import React from 'react';
import PropTypes from 'prop-types';
import StatusAlert from '../StatusAlert';

import './PDFViewer.scss';

const getIFrameUrl = (serverBaseUrl, relativeUrl) => (
  `${serverBaseUrl}/static/pdf_js/web/viewer.html?file=${relativeUrl}`
);

const PDFViewer = props => (
  props.url ? (
    <div className="embed-responsive responsive-pdf">
      <iframe
        title={props.title}
        className="embed-responsive-item"
        src={getIFrameUrl(props.serverBaseUrl, props.url)}
      />
    </div>
  ) : (
    <StatusAlert
      alertType="danger"
      iconClassName={['fa', 'fa-times-circle']}
      message="Document not found"
    />
  )
);

PDFViewer.defaultProps = {
  title: '',
  serverBaseUrl: '',
};

PDFViewer.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  serverBaseUrl: PropTypes.string,
};

export default PDFViewer;
