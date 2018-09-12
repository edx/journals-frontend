import { connect } from 'react-redux';

import JournalAboutPage from '../../components/JournalAboutPage';

const mapStateToProps = state => (
  {
    journal: state.journal,
    authorizedJournals: state.siteInfo.authorizedJournals,
    serverBaseUrl: state.siteInfo.serverBaseUrl,
  }
);

const mapDispatchToProps = () => ({
});

const JournalAboutPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(JournalAboutPage);

export default JournalAboutPageContainer;

