import React from 'react';
import PropTypes from 'prop-types';
import HeroBanner from '../HeroBanner';

import './JournalAboutPage.scss';

const JournalAboutPage = props => (
  props.journal.finishedFetching ? (
    <div>
      <HeroBanner
        title={props.journal.title}
        description={props.journal.shortDescription}
        bannerImageUrl={`${props.serverBaseUrl}${props.journal.heroImageUrl}`}
        showButton
        authorized={props.authorizedJournals.includes(props.journal.journalId)}
        journalAboutId={props.journal.journalAboutId}
        purchaseUrl={`${props.serverBaseUrl}${props.journal.purchaseUrl}`}
        price={props.journal.price}
      />
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
