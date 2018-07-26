import React from 'react';
import PropTypes from 'prop-types';
// import Button from '@edx/paragon';
import { Document, Page } from 'react-pdf';

import './PFDViewer.scss';

// TODO: get from site branding
import settings from '../../data/configuration/constants';

class PDFViewer extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <span id={this.props.id}>
        <div className="pdf-border w-100">
          <div className="pdf-title">{this.props.title}</div>
          <div className="pdf-block">
            <Document
              file={`${settings.journalsBackendBaseUrl}${this.props.url}`}
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page className="pdf-page" pageNumber={pageNumber} width="300" />
            </Document>
          </div>
          <p>Page {pageNumber} of {numPages}</p>
        </div>
      </span>
    );
  }
}

PDFViewer.defaultProps = {
  title: '',
};

PDFViewer.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default PDFViewer;
