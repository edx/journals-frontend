import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { HashLink as Link } from 'react-router-hash-link';
import { Icon } from '@edx/paragon';
import { FormattedPlural } from 'react-intl';

import './SearchResults.scss';
import {
  RICH_TEXT,
  RAW_HTML,
  PDF,
  XBLOCK_VIDEO,
  IMAGE,
} from '../../data/constants/contentTypes';

import {
  FILTER_ID_ALL,
  FILTER_ID_IMAGES,
  FILTER_ID_DOCUMENTS,
  FILTER_ID_VIDEOS,
} from '../../data/constants/filterTypes';

const NUM_HIGHLIGHTS_DISPLAY = 3;

const BreadCrumb = ({
  breadcrumbs,
}) => (
  <div className="breadcrumb">
    {
    breadcrumbs.map(breadcrumb => (
      <div key={breadcrumb} className="result-breadcrumb">
        {breadcrumb}
      </div>
    ))
  }
  </div>
);

const AdditionalHighlights = ({
  total,
}) => (
  total > NUM_HIGHLIGHTS_DISPLAY &&
    <div className="additional-highlights">
      <FormattedPlural
        value={total - NUM_HIGHLIGHTS_DISPLAY}
        one={`+ ${total - NUM_HIGHLIGHTS_DISPLAY} more instance`}
        other={`+ ${total - NUM_HIGHLIGHTS_DISPLAY} more instances`}
      />
    </div>
);

const SearchHighlight = ({
  highlights,
}) => (
  highlights.map(highlight => (
    <div
      key={highlight}
      className="result-highlight"
      dangerouslySetInnerHTML={{ __html: highlight }} // eslint-disable-line react/no-danger
    />
  ))
);

const SearchItem = ({
  data,
}) => (
  <Link className="card-link" to={`/${data.journal_about_page_id}/pages/${data.page_id}#${data.span_id}`} >
    <div className="search-result-card">
      <div className="result-icon">
        <Icon
          className={
            classNames({
              fa: true,
              'fa-book': data.block_type === RICH_TEXT || data.block_type === RAW_HTML,
              'fa-file-video-o': data.block_type === XBLOCK_VIDEO,
              'fa-picture-o': data.block_type === IMAGE,
              'fa-file-pdf-o': data.block_type === PDF,
            }).split(' ')
          }
        />
        <span className="result-title">{data.block_title}</span>
      </div>

      <SearchHighlight highlights={data.highlights.slice(0, NUM_HIGHLIGHTS_DISPLAY)} />
      <AdditionalHighlights total={data.highlights.length} />
      <BreadCrumb breadcrumbs={data.breadcrumbs} />
    </div>
  </Link>
);

class SearchResults extends React.Component {
  formatKey(searchResults) {
    return `${searchResults.journal_id}-${searchResults.page_id}-${searchResults.block_id}-${searchResults.block_type}`;
  }

  matchesFilter(blockType) {
    return (this.props.filter === FILTER_ID_ALL ||
            (this.props.filter === FILTER_ID_DOCUMENTS && blockType === PDF) ||
              (this.props.filter === FILTER_ID_IMAGES && blockType === IMAGE) ||
              (this.props.filter === FILTER_ID_VIDEOS && blockType === XBLOCK_VIDEO));
  }

  render() {
    if (this.props.error) {
      return (
        <div className="result-progress"> Error occurred searching</div>
      );
    }
    if (this.props.searchStarted && !this.props.searchFinished) {
      return (
        <div className="result-progress"> Searching...</div>
      );
    }
    if (this.props.resultsCounter(this.props.filter) === 0) {
      return (
        <div className="result-progress">No matching results found</div>
      );
    }
    return (
      <div>
        <div className="results-container">
          {
            this.props.hits.map(searchResult => (
              this.matchesFilter(searchResult.block_type) &&
                <SearchItem
                  key={this.formatKey(searchResult)}
                  data={searchResult}
                  filter={this.props.filter}
                />
            ))
          }
        </div>
      </div>
    );
  }
}

BreadCrumb.defaultProps = {
  breadcrumbs: [],
};

BreadCrumb.propTypes = {
  breadcrumbs: PropTypes.arrayOf(PropTypes.string),
};

SearchItem.defaultProps = {
};

SearchItem.propTypes = {
  data: PropTypes.shape({
    journal_about_page_id: PropTypes.number,
    page_id: PropTypes.number,
    span_id: PropTypes.string,
    block_title: PropTypes.string,
    block_type: PropTypes.string,
    highlights: PropTypes.array,
    breadcrumbs: PropTypes.array,
  }).isRequired,
};

SearchResults.defaultProps = {
  hits: [],
  searchFinished: true,
  searchStarted: false,
  error: null,
  resultsCounter: () => 0,
};

SearchResults.propTypes = {
  resultsCounter: PropTypes.func,
  filter: PropTypes.string.isRequired,
  searchFinished: PropTypes.bool,
  searchStarted: PropTypes.bool,
  error: PropTypes.instanceOf(Error),
  hits: PropTypes.arrayOf(PropTypes.object),
};

export default SearchResults;
