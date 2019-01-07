import React from 'react';
import { SearchField } from '@edx/paragon';
import qs from 'query-string';
import PropTypes from 'prop-types';

const SEARCH_PATH = '/search/';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search(query) {
    const MATCH_PHRASE_START_CHAR = '"';
    const MATCH_PHRASE_END_CHAR = '"';
    let searchOperator = 'or';
    if (query.startsWith(MATCH_PHRASE_START_CHAR) && query.endsWith(MATCH_PHRASE_END_CHAR)) {
      searchOperator = 'and';
    }
    const cleanQuery = query.replace(new RegExp(MATCH_PHRASE_START_CHAR, 'g'), '');
    const options = {
      query: cleanQuery,
      operator: searchOperator,
      journalId: this.props.journalId,
    };
    this.props.history.push(`${SEARCH_PATH}?${qs.stringify(options)}`);
  }

  render() {
    return <SearchField onSubmit={(value) => { this.search(value); }} />;
  }
}

SearchBar.defaultProps = {
  journalId: 0,
};

SearchBar.propTypes = {
  journalId: PropTypes.number,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default SearchBar;
