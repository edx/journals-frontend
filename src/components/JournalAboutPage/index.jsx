import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Hyperlink } from '@edx/paragon';
import './JournalAboutPage.scss';

const JournalAboutPage = props => (
  props.journal.finishedFetching ? (
    <div>
      <div className="hero" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${props.serverBaseUrl}${props.journal.heroImageUrl})` }} >
        <div><h1>{props.journal.title}</h1></div>
        <div><h2>{props.journal.shortDescription}</h2></div>
        <div>
          {
            props.authorizedJournals.includes(props.journal.journalId) ? (
              <Link to={{ pathname: `/${props.journal.journalAboutId}` }} className="btn btn-success">View Now</Link>
            ) : (
              <Hyperlink destination={`${props.serverBaseUrl}${props.journal.purchaseUrl}`} className="btn btn-success" content={`Purchase Access ($${props.journal.price})`} />
            )
          }
        </div>
      </div>
      <div>
        <p className="long-description">{props.journal.longDescription}</p>
        {
          /* eslint-disable react/no-danger */
          <div dangerouslySetInnerHTML={{ __html: props.journal.customContent }} />
          /* eslint-enable react/no-danger */
        }
      </div>
    </div>
  ) : (
    'Loading...'
  )
);

JournalAboutPage.defaultProps = {
  serverBaseUrl: '',
  authorizedJournals: [],
};

JournalAboutPage.propTypes = {
  journal: PropTypes.shape({
    heroImageUrl: PropTypes.string,
    title: PropTypes.string,
    shortDescription: PropTypes.string,
    longDescription: PropTypes.string,
    customContent: PropTypes.string,
    journalAboutId: PropTypes.number,
    journalId: PropTypes.number,
    purchaseUrl: PropTypes.string,
    price: PropTypes.string,
    finishedFetching: PropTypes.bool,
  }).isRequired,
  serverBaseUrl: PropTypes.string,
  authorizedJournals: PropTypes.arrayOf(PropTypes.number),
};


export default JournalAboutPage;
