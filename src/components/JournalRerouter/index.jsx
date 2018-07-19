import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';


class JournalRerouter extends React.Component {
  componentDidMount() {
    this.props.getJournal(this.props.match.params.journalId);
  }

  render() {
    if (this.props.userInfoFinishedFetching && this.props.journalFinishedFetching) {
      // Only run if both the user info and journal info API calls have finished
      if (this.props.lastVisitedPage) {
        // Send user to the last page they visited if available
        const lastVisitedPageUrl = `/${this.props.match.params.journalId}/pages/${this.props.lastVisitedPage}`;
        return <Redirect push to={lastVisitedPageUrl} />;
      }
      // Send user to the first page in the journal
      const firstJournalPage = `/${this.props.match.params.journalId}/pages/${this.props.journalFirstPage}`;
      return <Redirect push to={firstJournalPage} />;
    }
    return <div>Loading...</div>;
  }
}

JournalRerouter.defaultProps = {
  lastVisitedPage: 0,
  journalFirstPage: 0,
  getJournal: () => {},
  userInfoFinishedFetching: false,
  journalFinishedFetching: false,
};

JournalRerouter.propTypes = {
  lastVisitedPage: PropTypes.number,
  match: PropTypes.shape({
    params: PropTypes.shape({
      journalId: PropTypes.string,
    }),
    url: PropTypes.string,
  }).isRequired,
  journalFirstPage: PropTypes.number,
  getJournal: PropTypes.func,
  userInfoFinishedFetching: PropTypes.bool,
  journalFinishedFetching: PropTypes.bool,
};

export default JournalRerouter;
