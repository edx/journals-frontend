import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';


class JournalPageRedirect extends React.Component {
  constructor(props) {
    super(props);
    this.setPageUrls();
  }
  componentDidUpdate() {
    this.setPageUrls();
  }
  setPageUrls() {
    this.lastVisitedPageUrl = `/${this.props.match.params.journalAboutId}/pages/${this.props.lastVisitedPage}`;
    this.firstJournalPageUrl = `/${this.props.match.params.journalAboutId}/pages/${this.props.journalFirstPage}`;
  }
  render() {
    if (this.props.siteInfoFinishedFetching && this.props.journalFinishedFetching) {
      // Only run if both the user info and journal info API calls have finished
      if (this.props.lastVisitedPage) {
        // Send user to the last page they visited if available
        return <Redirect push to={this.lastVisitedPageUrl} />;
      }
      // Send user to the first page in the journal
      return <Redirect push to={this.firstJournalPageUrl} />;
    }
    return <div>Loading...</div>;
  }
}

JournalPageRedirect.defaultProps = {
  lastVisitedPage: 0,
  journalFirstPage: 0,
  siteInfoFinishedFetching: false,
  journalFinishedFetching: false,
};

JournalPageRedirect.propTypes = {
  lastVisitedPage: PropTypes.number,
  match: PropTypes.shape({
    params: PropTypes.shape({
      journalAboutId: PropTypes.string,
    }),
    url: PropTypes.string,
  }).isRequired,
  journalFirstPage: PropTypes.number,
  siteInfoFinishedFetching: PropTypes.bool,
  journalFinishedFetching: PropTypes.bool,
};

export default JournalPageRedirect;
