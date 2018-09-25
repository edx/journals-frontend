import React from 'react';
import PropTypes from 'prop-types';
import StatusAlert from '../StatusAlert';

import './ImageViewer.scss';


const ImageViewer = props => (
  props.url ? (
    <img className="image-block" src={props.url} alt={props.altText} />
  ) : (
    <StatusAlert
      alertType="danger"
      iconClassName={['fa', 'fa-times-circle']}
      message="Image not found"
    />
  )
);

ImageViewer.defaultProps = {
  altText: '',
};

ImageViewer.propTypes = {
  url: PropTypes.string.isRequired,
  altText: PropTypes.string,
};

export default ImageViewer;
