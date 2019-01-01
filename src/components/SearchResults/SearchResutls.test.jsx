import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';
import SearchResults from '.';
import {
  FILTER_ID_ALL, FILTER_ID_DOCUMENTS, FILTER_ID_IMAGES, FILTER_ID_VIDEOS,
} from '../../data/constants/filterTypes';


import { mockGetResultCount, mockSearchResults } from './SearchResults.mock';

const SearchResultWrapper = props => (
  <IntlProvider locale="en">
    <MemoryRouter>
      <SearchResults
        {...props}
      />
    </MemoryRouter>
  </IntlProvider>
);

describe('<SearchResults/>', () => {
  describe('renders', () => {
    it('with no searchResults', () => {
      const tree = renderer
        .create((
          <SearchResultWrapper filter={FILTER_ID_ALL} />
        ))
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with filter all', () => {
      const tree = renderer
        .create((
          <SearchResultWrapper
            resultsCounter={mockGetResultCount}
            filter={FILTER_ID_ALL}
            hits={mockSearchResults.hits}
          />
        ))
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with filter document', () => {
      const tree = renderer
        .create((
          <SearchResultWrapper
            resultsCounter={mockGetResultCount}
            filter={FILTER_ID_DOCUMENTS}
            hits={mockSearchResults.hits}
          />
        ))
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with filter image ', () => {
      const tree = renderer
        .create((
          <SearchResultWrapper
            resultsCounter={mockGetResultCount}
            filter={FILTER_ID_IMAGES}
            hits={mockSearchResults.hits}
          />
        ))
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with filter video ', () => {
      const tree = renderer
        .create((
          <SearchResultWrapper
            resultsCounter={mockGetResultCount}
            filter={FILTER_ID_VIDEOS}
            hits={mockSearchResults.hits}
          />
        ))
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with wrong filter', () => {
      const tree = renderer
        .create((
          <SearchResultWrapper
            filter="foobar"
            resultsCounter={mockGetResultCount}
            hits={mockSearchResults.hits}
          />
        ))
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with error', () => {
      const tree = renderer
        .create((
          <SearchResultWrapper
            filter={FILTER_ID_ALL}
            hits={mockSearchResults.hits}
            error={new Error('some error')}
          />
        ))
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with no finish loading', () => {
      const tree = renderer
        .create((
          <SearchResultWrapper
            filter={FILTER_ID_VIDEOS}
            hits={mockSearchResults.hits}
            searchStarted
            searchFinished={false}
          />
        ))
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
