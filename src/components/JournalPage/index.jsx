import React from 'react';
import PropTypes from 'prop-types';


const Page = props => (
  <div className="page">
    <h3>{props.title}</h3>
  </div>
);

Page.defaultProps = {
  title: '',
};

Page.propTypes = {
  title: PropTypes.string,
};


export default Page;
