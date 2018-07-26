import { connect } from 'react-redux';

import JournalListComp from '../../components/JournalList';
import fetchJournals from '../../data/actions/journals';

const mapStateToProps = state => (
  {
    journals: state.journals.journals,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getJournals: () => dispatch(fetchJournals()),
  }
);

const IndexPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(JournalListComp);

export default IndexPage;
