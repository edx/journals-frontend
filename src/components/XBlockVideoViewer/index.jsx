import React from 'react';
import PropTypes from 'prop-types';

import './XBlockVideoViewer.scss';


const XBlockVideoViewer = props => (
  <div className="xblock-video-container embed-responsive responsive-video">
    <iframe
      className="imported-xblock-video embed-responsive-item"
      title={props.title}
      src={props.url}
      allowFullScreen
    />
  </div>
);

XBlockVideoViewer.defaultProps = {
  title: '',
};

XBlockVideoViewer.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default XBlockVideoViewer;
