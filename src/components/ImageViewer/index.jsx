import React from 'react';
import PropTypes from 'prop-types';

// TODO: get from site branding
import settings from '../../data/configuration/constants';

import './ImageViewer.scss';


const ImageViewer = props => (
  // If title or caption is an empty string or a string of whitespaces do not display an empty div
  <span id={props.spanId}>
    <div className="image-border">
      { (props.title.trim() !== '') ?
        <div className="grow">
          <div className="image-title" >{props.title} </div>
        </div> :
        ''
      }
      <img className="image-block" src={`${settings.journalsBackendBaseUrl}${props.url}`} alt={props.altText} />
      { (props.caption.trim() !== '') ?
        /* eslint-disable react/no-danger */
        <div className="image-caption grow">
          <div dangerouslySetInnerHTML={{ __html: props.caption }} />
        </div> :
        ''
        /* eslint-enable react/no-danger */
      }
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
  spanId: PropTypes.string.isRequired,
  altText: PropTypes.string,
  caption: PropTypes.string,
  title: PropTypes.string,
};

export default ImageViewer;
