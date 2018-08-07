import React from 'react';
import PropTypes from 'prop-types';

// TODO: get from site branding
import settings from '../../data/configuration/constants';

import './ImageViewer.scss';


const ImageViewer = props => (
  <img className="image-block" src={`${settings.journalsBackendBaseUrl}${props.url}`} alt={props.altText} />
);

ImageViewer.defaultProps = {
  altText: '',
};

ImageViewer.propTypes = {
  url: PropTypes.string.isRequired,
  altText: PropTypes.string,
};

export default ImageViewer;
