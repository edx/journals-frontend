import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Button } from '@edx/paragon';
import ImgWithDefault from '../ImgWithDefault';
import BookCard from '../../images/book-card.jpeg';
import HeroBanner from '../../components/HeroBanner';

import './JournalIndexPage.scss';


const JournalCard = props => (
  <Link className="journal-card-link" to={{ pathname: props.authorized ? `/${props.journalAboutId}` : `/${props.journalAboutId}/about` }}>
    <div className="journal-card" >
      <div className="journal-card-image">
        <ImgWithDefault img={props.cardImageUrl} defaultImage={BookCard} altText={props.title} />
      </div>
      <div className="journal-card-organization">
        {props.organization}
      </div>
      <div className="journal-card-title">
        {props.title}
      </div>
      <div className="button-container">
        <Button className={['btn', 'btn-outline-secondary']} label={props.authorized ? 'View Now' : 'Learn More'} />
      </div>
    </div>
  </Link>
);

class JournalIndexPage extends React.Component {
  componentDidMount() {
    this.props.getJournals();
    this.props.toggleNavigationVisibility(false);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.finishedFetching !== this.props.finishedFetching) {
      if (this.props.journals.length === 1) {
        this.props.useExistingJournal(this.props.journals[0]);
      } else {
        this.props.getJournalIndex();
        // clear journal state when index page fully loaded
        this.props.resetJournal();
      }
    }
  }

  render() {
    // if there only one journal directly show the About Page
    if (!this.props.isPreview && this.props.finishedFetching && this.props.journals.length === 1) {
      return <Redirect push to={`/${this.props.journals[0].id}/about`} />;
    }
    return (
      <div> {
        this.props.finishedFetchingIndex && this.props.journalIndex &&
          <div>
            <HeroBanner
              title={this.props.journalIndex.title}
              bannerImageUrl={this.props.journalIndex.heroImageUrl}
            />
            {
              /* eslint-disable react/no-danger */
              <div dangerouslySetInnerHTML={{ __html: this.props.journalIndex.intro }} />
              /* eslint-enable react/no-danger */
            }
          </div>
        }
        <div className="journal-card-container">
          {
            this.props.finishedFetching &&
              this.props.journals.map(journal => (
                <JournalCard
                  key={journal.id}
                  journalAboutId={journal.id}
                  title={journal.title}
                  organization={journal.organization}
                  cardImageUrl={journal.card_image_url}
                  authorized={this.props.authorizedJournals.includes(journal.journal_id)}
                />
              ))
          }
        </div>
      </div>
    );
  }
}

JournalCard.defaultProps = {
  title: '',
  organization: '',
  cardImageUrl: '',
  authorized: false,
};

JournalCard.propTypes = {
  title: PropTypes.string,
  organization: PropTypes.string,
  cardImageUrl: PropTypes.string,
  journalAboutId: PropTypes.number.isRequired,
  authorized: PropTypes.bool,
};

JournalIndexPage.defaultProps = {
  journals: [],
  getJournals: () => [{}],
  getJournalIndex: () => [{}],
  toggleNavigationVisibility: () => {},
  useExistingJournal: () => {},
  finishedFetchingIndex: false,
  finishedFetching: false,
  authorizedJournals: [],
  isPreview: false,
  resetJournal: () => {},
};

JournalIndexPage.propTypes = {
  journals: PropTypes.arrayOf(PropTypes.object),
  journalIndex: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    intro: PropTypes.string,
    heroImageUrl: PropTypes.string,
  }).isRequired,
  getJournals: PropTypes.func,
  getJournalIndex: PropTypes.func,
  toggleNavigationVisibility: PropTypes.func,
  useExistingJournal: PropTypes.func,
  finishedFetching: PropTypes.bool,
  finishedFetchingIndex: PropTypes.bool,
  authorizedJournals: PropTypes.arrayOf(PropTypes.number),
  isPreview: PropTypes.bool,
  resetJournal: PropTypes.func,
};

export default JournalIndexPage;
