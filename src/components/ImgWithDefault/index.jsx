import React from 'react';
import PropTypes from 'prop-types';
import EdxLogo from '../../images/edx-logo.png';


function ImgWithDefault(props) {
  return (
    <img
      className={props.className}
      src={props.img || props.defaultImage}
      alt={props.altText}
      onError={(e) => { e.target.src = props.defaultImage; }}
    />
  );
}

ImgWithDefault.defaultProps = {
  className: '',
  img: null,
  defaultImage: EdxLogo,
  altText: 'edX logo',
};

ImgWithDefault.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  defaultImage: PropTypes.string,
  altText: PropTypes.string,
};

export default ImgWithDefault;
