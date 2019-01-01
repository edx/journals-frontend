import React from 'react';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import configureMockStore from 'redux-mock-store';
import { FILTER_ID_ALL, FILTER_ID_DOCUMENTS } from '../../data/constants/filterTypes';
import { SET_FILTER, STARTED_SEARCHING } from '../../data/constants/actionTypes/search';

import { mockSearchResults } from '../SearchResults/SearchResults.mock';
import SearchPage from './index';

const mockStore = configureMockStore([thunk]);

const searchResults = {
  filter: FILTER_ID_ALL,
  hits: mockSearchResults.hits,
  error: null,
  finishedFetching: true,
  startedFetching: false,
};
const store = mockStore({ searchResults });

const mockSetFilter = (filter) => {
  store.dispatch({ type: SET_FILTER, filter });
};
const mockGetSearchResults = (journalId, query, operator, filter) => {
  store.dispatch({
    type: STARTED_SEARCHING,
    journalId,
    query,
    operator,
    filter,
  });
};

const testActionPayload = (expectedPayload) => {
  const actions = store.getActions();
  if (expectedPayload) {
    expect(actions).toEqual([expectedPayload]);
  } else {
    expect(actions).toEqual([]);
  }
};

const SearchPageWrapper = props => (
  <IntlProvider locale="en">
    <MemoryRouter>
      <Provider store={store}>
        <SearchPage
          {...props}
        />
      </Provider>
    </MemoryRouter>
  </IntlProvider>
);

describe('<SearchPage/>', () => {
  beforeEach(() => {
    store.clearActions();
  });
  describe('renders', () => {
    it('with all filters', () => {
      const tree = renderer
        .create((
          <SearchPageWrapper filter={FILTER_ID_ALL} query="foo" operator="and" meta={mockSearchResults.meta} />
        ))
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with empty meta', () => {
      const wrapper = mount(<SearchPageWrapper
        filter={FILTER_ID_ALL}
        query="foo"
        operator="and"
        meta={{}}
      />);
      const cardLength = wrapper.find('.search-result-card').length;
      expect(cardLength).toBe(0);
    });

    it('with invalid filter', () => {
      const wrapper = mount(<SearchPageWrapper
        filter="blah"
        query="foo"
        operator="and"
        meta={mockSearchResults.meta}
      />);
      expect(wrapper.find('.filter-btn-selected').length).toBe(0);
    });

    it('renders correct results', () => {
      const wrapper = mount(<SearchPageWrapper
        filter={FILTER_ID_ALL}
        query="foo"
        operator="and"
        meta={mockSearchResults.meta}
      />);
      const cardLength = wrapper.find('.search-result-card').length;
      expect(cardLength).toBe(mockSearchResults.meta.total_count);
      expect(wrapper.find('.filter-btn-selected').length).toBe(1);
    });
  });

  describe('dispatch', () => {
    it('change filter correctly', () => {
      const wrapper = mount(<SearchPageWrapper
        setFilter={mockSetFilter}
        filter={FILTER_ID_ALL}
        query="foo"
        operator="and"
        meta={mockSearchResults.meta}
      />);
      wrapper.find('button.filter-btn').at(1).simulate('click');
      const actions = store.getActions();
      const expectedPayload = { type: SET_FILTER, filter: FILTER_ID_DOCUMENTS };
      expect(actions).toEqual([expectedPayload]);
    });
    describe('searches', () => {
      it('correctly', () => {
        let props = {
          journalId: 1,
          query: 'foo',
          operator: 'or',
          filter: FILTER_ID_ALL,
          getSearchResults: mockGetSearchResults,
        };
        props = {
          ...props,
          location: { search: `journalId=${props.journalId}&operator=${props.operator}&query=${props.query}` },
        };
        const wrapper = mount(<SearchPageWrapper {...props} meta={mockSearchResults.meta} />);
        store.clearActions();
        const NewProps = {
          journalId: 2,
          query: 'bar',
          operator: 'and',
          filter: props.filter,
        };
        const location = { search: `journalId=${NewProps.journalId}&operator=${NewProps.operator}&query=${NewProps.query}` };
        wrapper.setProps({ NewProps, location });
        testActionPayload({ type: STARTED_SEARCHING, ...NewProps });
      });

      it('undefined journalId', () => {
        let props = {
          query: 'foo',
          operator: 'or',
          filter: FILTER_ID_ALL,
          getSearchResults: mockGetSearchResults,
        };
        props = {
          ...props,
          location: { search: `operator=${props.operator}&query=${props.query}` },
        };
        const wrapper = mount(<SearchPageWrapper {...props} meta={mockSearchResults.meta} />);
        testActionPayload(null);

        // try searching again with different query to update component
        wrapper.setProps({ query: 'bar' });
        testActionPayload(null);
      });

      it('without passing getSearchResults', () => {
        let props = {
          query: 'foo',
          operator: 'or',
          filter: FILTER_ID_ALL,
        };
        props = {
          ...props,
          location: { search: `journalId=${props.journalId}&operator=${props.operator}&query=${props.query}` },
        };
        mount(<SearchPageWrapper {...props} meta={mockSearchResults.meta} />);
        testActionPayload(null);
      });

      it('with error', () => {
        let props = {
          journalId: 1,
          query: 'foo',
          operator: 'or',
          filter: FILTER_ID_ALL,
        };
        props = {
          ...props,
          location: { search: `journalId=${props.journalId}&operator=${props.operator}&query=${props.query}` },
        };
        const wrapper = mount(<SearchPageWrapper {...props} meta={mockSearchResults.meta} />);
        // try searching again with different query to update component
        wrapper.setProps({ query: 'bar', error: new Error() });
        testActionPayload(null);
      });

      it('change journal id', () => {
        let props = {
          journalId: 1,
          query: 'foo',
          operator: 'or',
          filter: FILTER_ID_ALL,
        };
        props = {
          ...props,
          location: { search: `journalId=${props.journalId}&operator=${props.operator}&query=${props.query}` },
        };
        const wrapper = mount(<SearchPageWrapper {...props} meta={mockSearchResults.meta} />);
        // try searching again with different query to update component
        const newJournalId = 2;
        const location = { search: `journalId=${newJournalId}&operator=${props.operator}&query=${props.query}` };
        wrapper.setProps({ journalId: newJournalId, location });
        testActionPayload(null);
      });
    });
  });
  describe('getSearchResult', () => {
    const wrapper = mount(<SearchPageWrapper
      filter={FILTER_ID_ALL}
      query="foo"
      operator="and"
      meta={mockSearchResults.meta}
    />);
    const instance = wrapper.find('SearchPage').instance();
    it('with filter all', () => {
      expect(instance.getResultCount(FILTER_ID_ALL)).toBe(mockSearchResults.meta.total_count);
    });

    it('with document filter', () => {
      expect(instance.getResultCount(FILTER_ID_DOCUMENTS)).toBe(mockSearchResults.meta.doc_count);
    });

    it('with invalid filter', () => {
      expect(instance.getResultCount('blah')).toBe(0);
    });
  });
});
