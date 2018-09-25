import React from 'react';
import PropTypes from 'prop-types';
import StatusAlert from '../StatusAlert';

import './XBlockVideoViewer.scss';


const XBlockVideoViewer = props => (
  props.url ? (
    <div className="xblock-video-container embed-responsive responsive-video">
      <iframe
        className="imported-xblock-video embed-responsive-item"
        title={props.title}
        src={props.url}
        allowFullScreen
      />
    </div>
  ) : (
    <StatusAlert
      alertType="danger"
      iconClassName={['fa', 'fa-times-circle']}
      message="Video not found"
    />
  )
);

XBlockVideoViewer.defaultProps = {
  title: '',
};

XBlockVideoViewer.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default XBlockVideoViewer;
