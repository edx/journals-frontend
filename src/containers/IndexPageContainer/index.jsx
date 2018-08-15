import { connect } from 'react-redux';

import IndexPage from '../../components/IndexPage';
import fetchJournals from '../../data/actions/journals';
import { toggleNavigationVisibility } from '../../data/actions/navigation';

const mapStateToProps = state => (
  {
    journals: state.journals.journals,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getJournals: () => dispatch(fetchJournals()),
    toggleNavigationVisibility: val => dispatch(toggleNavigationVisibility(val)),
  }
);

const IndexPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(IndexPage);

export default IndexPageContainer;
