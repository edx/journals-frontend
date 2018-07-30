import React from 'react';
import PropTypes from 'prop-types';

import './XBlockVideoViewer.scss';

const XBlockVideoViewer = props => (
  <span id={props.id}>
    <div className="video-block embed-responsive embed-responsive-16by9">
      <iframe
        title={props.title}
        className="xblock-video embed-responsive-item"
        src={props.url}
      />
    </div>
  </span>
);

XBlockVideoViewer.defaultProps = {
  title: '',
};

XBlockVideoViewer.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default XBlockVideoViewer;
