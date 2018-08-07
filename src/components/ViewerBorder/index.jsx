import React from 'react';
import PropTypes from 'prop-types';

import './ViewerBorder.scss';


const ViewerBorder = props => (
  <span id={props.spanId}>
    <div className={`viewer-border${props.spanFullWidth ? ' w-100' : ''}`}>
      { props.title.trim() &&
        <div className="grow">
          <div className="viewer-title" >{props.title} </div>
        </div>
      }
      <div className="viewer-content">
        {props.children}
      </div>
      { props.caption.trim() &&
        /* eslint-disable react/no-danger */
        <div className="viewer-caption grow">
          <div dangerouslySetInnerHTML={{ __html: props.caption }} />
        </div>
        /* eslint-enable react/no-danger */
      }
    </div>
  </span>
);

ViewerBorder.defaultProps = {
  title: '',
  caption: '',
  spanFullWidth: false,
};

ViewerBorder.propTypes = {
  children: PropTypes.element.isRequired,
  spanId: PropTypes.string.isRequired,
  title: PropTypes.string,
  caption: PropTypes.string,
  spanFullWidth: PropTypes.bool,
};

export default ViewerBorder;
