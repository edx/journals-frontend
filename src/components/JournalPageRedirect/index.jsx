import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import ErrorPage from '../ErrorPage';


class JournalPageRedirect extends React.Component {
  constructor(props) {
    super(props);
    this.setPageUrls();
  }
  componentDidUpdate() {
    this.setPageUrls();
  }
  setPageUrls() {
    const lastVisitedPage = this.props.visitedPages.filter(page => (
      page.journal_about === parseInt(this.props.match.params.journalAboutId, 10)
    ));

    this.lastVisitedPageUrl = (
      lastVisitedPage.length > 0 ?
        `/${this.props.match.params.journalAboutId}/pages/${lastVisitedPage[0].page}` :
        null
    );

    this.firstJournalPageUrl = (
      this.props.journalFirstPage ?
        `/${this.props.match.params.journalAboutId}/pages/${this.props.journalFirstPage}` :
        null
    );

    this.journalAboutPageUrl = `/${this.props.match.params.journalAboutId}/about`;
  }
  render() {
    if (this.props.error) {
      return (
        <ErrorPage
          status={this.props.error.response && this.props.error.response.status}
          message={this.props.error.message}
        />
      );
    }
    if (
      this.props.siteInfoFinishedFetching &&
      this.props.journalFinishedFetching &&
      this.props.journalAboutId === parseInt(this.props.match.params.journalAboutId, 10)
    ) {
      if (this.lastVisitedPageUrl) {
        // Send user to the last page they visited if available
        return <Redirect push to={this.lastVisitedPageUrl} />;
      }
      if (this.firstJournalPageUrl) {
        // Send user to the first page in the journal
        return <Redirect push to={this.firstJournalPageUrl} />;
      }
      return <Redirect push to={this.journalAboutPageUrl} />;
    }
    return <div>Loading...</div>;
  }
}

JournalPageRedirect.defaultProps = {
  siteInfoFinishedFetching: false,
  journalFinishedFetching: false,
  journalFirstPage: 0,
  journalAboutId: 0,
  error: null,
};

JournalPageRedirect.propTypes = {
  visitedPages: PropTypes.arrayOf(PropTypes.shape({
    page: PropTypes.number,
    journal_about: PropTypes.number,
  })).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      journalAboutId: PropTypes.string,
    }),
    url: PropTypes.string,
  }).isRequired,
  journalFirstPage: PropTypes.number,
  siteInfoFinishedFetching: PropTypes.bool,
  journalFinishedFetching: PropTypes.bool,
  journalAboutId: PropTypes.number,
  error: PropTypes.instanceOf(Error),
};

export default JournalPageRedirect;
