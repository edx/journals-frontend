import { connect } from 'react-redux';

import JournalAboutPage from '../../components/JournalAboutPage';
import fetchJournal from '../../data/actions/journal';


const mapStateToProps = state => (
  {
    title: state.journal.title,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getJournal: pageId => dispatch(fetchJournal(pageId)),
  }
);

const JournalAboutPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(JournalAboutPage);

export default JournalAboutPageContainer;

