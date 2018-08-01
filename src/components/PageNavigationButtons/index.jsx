import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '@edx/paragon';

import './PageNavigationButtons.scss';


const PageNavigationButtons = props => (
  <div className="page-nav-btns">
    {
      props.prev.trim() ?
        <Link className="btn btn-primary" to={props.prev}>Previous</Link>
      :
        <Button buttonType="disabled" label="Previous" />
    }
    {
      props.next.trim() ?
        <Link className="btn btn-primary" to={props.next}>Next</Link>
      :
        <Button buttonType="disabled" label="Next" />
    }
  </div>
);

PageNavigationButtons.defaultProps = {
  prev: '',
  next: '',
};

PageNavigationButtons.propTypes = {
  prev: PropTypes.string,
  next: PropTypes.string,
};

export default PageNavigationButtons;
