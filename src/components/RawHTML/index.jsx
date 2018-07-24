import React from 'react';
import PropTypes from 'prop-types';

const RawHTML = props => (
  /* eslint-disable react/no-danger */
  <div dangerouslySetInnerHTML={{ __html: props.content }} />
  /* eslint-enable react/no-danger */
);

RawHTML.defaultProps = {
  content: <div />,
};

RawHTML.propTypes = {
  content: PropTypes.string,
};

export default RawHTML;
