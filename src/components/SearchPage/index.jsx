import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@edx/paragon';
import queryString from 'query-string';
import classNames from 'classnames';

import SearchResultsContainer from '../../containers/SearchResultsContainer';
import './SearchPage.scss';

import {
  FILTER_ID_ALL,
  FILTER_ID_IMAGES,
  FILTER_ID_DOCUMENTS,
  FILTER_ID_VIDEOS,
  FILTERS,
} from '../../data/constants/filterTypes';


class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.getResultCount = this.getResultCount.bind(this);
  }


  componentDidMount() {
    const parsed = queryString.parse(this.props.location.search);

    if (!this.checkValidArgs(parsed)) {
      return;
    }

    this.props.getSearchResults(
      parseInt(parsed.journalId, 10),
      parsed.query,
      parsed.operator,
      this.props.filter,
    );
  }

  componentDidUpdate(prevProps) {
    const parsed = queryString.parse(this.props.location.search);

    if (!this.checkValidArgs(parsed)) {
      return;
    }

    const journalId = parseInt(parsed.journalId, 10);

    if (!this.props.error && !this.props.searchStarted &&
      (prevProps.query !== parsed.query ||
      prevProps.operator !== parsed.operator ||
      prevProps.journalId !== journalId)) {
      this.props.getSearchResults(
        journalId,
        parsed.query,
        parsed.operator,
        this.props.filter,
      );
    }
  }

  getResultCount(filter) {
    if (this.props.meta.total_count === undefined) {
      return 0;
    }

    switch (filter) {
      case FILTER_ID_ALL:
        return this.props.meta.total_count;
      case FILTER_ID_DOCUMENTS:
        return this.props.meta.doc_count;
      case FILTER_ID_IMAGES:
        return this.props.meta.image_count;
      case FILTER_ID_VIDEOS:
        return this.props.meta.video_count;
      default:
        return 0;
    }
  }

  handleClick(filter) {
    this.props.setFilter(filter);
  }

  checkValidArgs(parsed) {
    if (parsed.journalId === undefined ||
      parsed.query === undefined ||
      parsed.operator === undefined) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        <div className="search-filter-panel">
          {
            Object.keys(FILTERS).map(label => (
              <div key={label}>
                <Button
                  className={
                      classNames({
                        'filter-btn': true,
                        'filter-btn-selected': FILTERS[label] === this.props.filter,
                      }).split(' ')
                    }
                  label={`${label} (${this.getResultCount(FILTERS[label])})`}
                  onClick={() => this.handleClick(FILTERS[label])}
                />
              </div>
            ))
        }
        </div>
        <SearchResultsContainer resultsCounter={this.getResultCount} />
      </div>
    );
  }
}


SearchPage.defaultProps = {
  setFilter: () => {},
  journalId: 0,
  getSearchResults: () => [{}],
  searchStarted: false,
  location: {
    search: null,
  },
  error: null,
};

SearchPage.propTypes = {
  filter: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    total_count: PropTypes.number,
    text_count: PropTypes.number,
    image_count: PropTypes.number,
    video_count: PropTypes.number,
    doc_count: PropTypes.number,
  }).isRequired,
  journalId: PropTypes.number,
  query: PropTypes.string.isRequired,
  operator: PropTypes.string.isRequired,
  getSearchResults: PropTypes.func,
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
  setFilter: PropTypes.func,
  searchStarted: PropTypes.bool,
  error: PropTypes.instanceOf(Error),
};

export default SearchPage;
