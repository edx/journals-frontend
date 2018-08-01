import React from 'react';
import PropTypes from 'prop-types';

// TODO: get from site branding
import settings from '../../data/configuration/constants';

import './ImageViewer.scss';


const ImageViewer = props => (
  // If title or caption is an empty string or a string of whitespaces do not display an empty div
  <span id={props.id}>
    <div className="image-border w-100">
      { (props.title.trim() !== '') ? <div className="image-title">{props.title} </div> : '' }
      <img className="image-block" src={`${settings.journalsBackendBaseUrl}${props.url}`} alt={props.altText} />
      { (props.caption.trim() !== '') ? <div className="image-caption">{props.caption} </div> : '' }
    </div>
  </span>
);

ImageViewer.defaultProps = {
  altText: '',
  caption: '',
  title: '',
};

ImageViewer.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  altText: PropTypes.string,
  caption: PropTypes.string,
  title: PropTypes.string,
};

export default ImageViewer;
