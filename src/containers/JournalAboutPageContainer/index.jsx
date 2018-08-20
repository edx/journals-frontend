import { connect } from 'react-redux';

import JournalAboutPage from '../../components/JournalAboutPage';

const mapStateToProps = state => (
  {
    title: state.journal.title,
    journalAboutId: state.journal.journalAboutId,
  }
);

const mapDispatchToProps = () => ({

});

const JournalAboutPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(JournalAboutPage);

export default JournalAboutPageContainer;

