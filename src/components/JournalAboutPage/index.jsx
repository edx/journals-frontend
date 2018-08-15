import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const JournalAboutPage = props => (
  <div className="about-page">
    <h3>{props.title}</h3>
    <Link to={{ pathname: `/${props.journalId}` }}>Enter</Link>
  </div>
);

JournalAboutPage.defaultProps = {
  title: '',
  journalId: 0,
};

JournalAboutPage.propTypes = {
  title: PropTypes.string,
  journalId: PropTypes.number,
};


export default JournalAboutPage;
