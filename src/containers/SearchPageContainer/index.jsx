import { connect } from 'react-redux';

import SearchPage from '../../components/SearchPage';
import { fetchSearchResults, setFilter } from '../../data/actions/search';

const mapStateToProps = state => (
  {
    meta: state.searchResults.meta,
    filter: state.searchResults.filter,
    journalId: state.searchResults.journalId,
    query: state.searchResults.query,
    operator: state.searchResults.operator,
    error: state.searchResults.error,
    searchFinished: state.searchResults.finishedFetching,
    searchStarted: state.searchResults.startedFetching,
  }
);

const mapDispatchToProps = dispatch => (
  {
    setFilter: filter => dispatch(setFilter(filter)),
    getSearchResults: (journalId, query, operator, filter) =>
      dispatch(fetchSearchResults(journalId, query, operator, filter)),

  }
);

const SearchPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPage);

export default SearchPageContainer;
