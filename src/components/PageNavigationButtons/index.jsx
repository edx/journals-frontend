import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from '@edx/paragon';

import './PageNavigationButtons.scss';

const PrevButtonText = () => (
  <div className="btn-label">
    <Icon className="fa fa-angle-left" hidden />
    <span className="btn-text">Previous</span>
  </div>
);

const NextButtonText = () => (
  <div className="btn-label">
    <span className="btn-text">Next</span>
    <Icon className="fa fa-angle-right" hidden />
  </div>
);

const PageNavigationButtons = props => (
  <div className="page-nav-btns">
    {
      props.prev.trim() ?
        <Link className="btn btn-outline-secondary nav-btn" to={props.prev}>
          {PrevButtonText()}
        </Link>
      :
        /* eslint-disable jsx-a11y/anchor-is-valid */
        <a className="btn btn-outline-secondary disabled nav-btn" aria-disabled="true">
          {PrevButtonText()}
        </a>
        /* eslint-enable jsx-a11y/anchor-is-valid */
    }
    {
      props.next.trim() ?
        <Link className="btn btn-outline-secondary nav-btn" to={props.next}>
          {NextButtonText()}
        </Link>
      :
        /* eslint-disable jsx-a11y/anchor-is-valid */
        <a className="btn btn-outline-secondary disabled nav-btn" aria-disabled="true">
          {NextButtonText()}
        </a>
        /* eslint-enable jsx-a11y/anchor-is-valid */
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
