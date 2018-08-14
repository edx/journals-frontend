import React from 'react';
import PropTypes from 'prop-types';

import './ImageViewer.scss';


const ImageViewer = props => (
  <img className="image-block" src={`${this.props.serverBaseUrl}${props.url}`} alt={props.altText} />
);

ImageViewer.defaultProps = {
  altText: '',
};

ImageViewer.propTypes = {
  url: PropTypes.string.isRequired,
  altText: PropTypes.string,
};

export default ImageViewer;
