import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@edx/paragon';
import { Link } from 'react-router-dom';


import './BreadCrumbs.scss';

const BreadCrumbs = props => (
  <ul>
    {
      props.ancestorPages.map(page =>
        (
          <li key={page.id} >
            <Link className="bread-crumb-link" to={`/${props.journalId}/pages/${page.id}`}>
              {page.title}
            </Link>
            <Icon className="fa fa-chevron-right bread-crumb-arrow" />
          </li>
        ))
    }
  </ul>
);

BreadCrumbs.defaultProps = {
};

BreadCrumbs.propTypes = {
  ancestorPages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  })).isRequired,
  journalId: PropTypes.string.isRequired,
};

export default BreadCrumbs;
