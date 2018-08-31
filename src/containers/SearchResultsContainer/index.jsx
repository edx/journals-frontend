import { connect } from 'react-redux';

import SearchResults from '../../components/SearchResults';

const mapStateToProps = state => (
  {
    filter: state.searchResults.filter,
    hits: state.searchResults.hits,
    error: state.searchResults.error,
    searchFinished: state.searchResults.finishedFetching,
    searchStarted: state.searchResults.startedFetching,
  }
);

const mapDispatchToProps = () => (
  {
  }
);

const SearchResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResults);

export default SearchResultsContainer;
