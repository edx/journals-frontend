import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';

import JournalPage from './index';
import mockJournalPage from './JournalPage.mock';
import {
  RICH_TEXT,
  RAW_HTML,
  PDF,
  XBLOCK_VIDEO,
  IMAGE,
} from '../../data/constants/contentTypes';


const mockStore = configureMockStore([thunk]);
const store = mockStore({ siteInfo: { serverBaseUrl: 'example.com' } });
const JournalPageWrapper = props => (
  <MemoryRouter>
    <Provider store={store}>
      <JournalPage
        {...mockJournalPage}
        {...props}
      />
    </Provider>
  </MemoryRouter>
);

describe('<JournalPage />', () => {
  describe('renders correctly', () => {
    it('with RAW HTML component', () => {
      const body = [
        { type: RAW_HTML, id: 1, value: 'body with raw_html' },
      ];
      const tree = renderer
        .create((
          <JournalPageWrapper
            body={body}
          />
        )).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with RICH TEXT component', () => {
      const body = [
        { type: RICH_TEXT, id: 2, value: 'body with rich_text' },
      ];
      const tree = renderer
        .create((
          <JournalPageWrapper
            body={body}
          />
        )).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with PDF component', () => {
      const body = [
        { type: PDF, id: 3, value: { span_id: 'p-id', title: 'p-title', url: 'example.com/PDF' } },
      ];
      const tree = renderer
        .create((
          <JournalPageWrapper
            body={body}
          />
        )).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with IMAGE component', () => {
      const body = [
        {
          type: IMAGE,
          id: 5,
          value: {
            span_id: 'i-id', title: 'i-title', url: 'ex.pk/image', caption: 'dummy',
          },
        },
      ];
      const tree = renderer
        .create((
          <JournalPageWrapper
            body={body}
          />
        )).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with XBLOCK VIDEO component', () => {
      const body = [
        { type: XBLOCK_VIDEO, id: 4, value: { span_id: 'v-id', title: 'v-title', view_url: 'ex.pk/video' } },
      ];
      const tree = renderer
        .create((
          <JournalPageWrapper
            body={body}
          />
        )).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with DUMMY component', () => {
      const body = [
        { type: 'dummy', id: 1 },
      ];
      const tree = renderer
        .create((
          <JournalPageWrapper
            body={body}
          />
        )).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('with last publish date.', () => {
      const mockedGetPage = jest.fn();
      const displayLastPublishedDate = true;
      const lastPublishedDate = '1976-04-19';
      const author = 'jon doe';
      const tree = renderer
        .create((
          <JournalPageWrapper
            displayLastPublishedDate={displayLastPublishedDate}
            lastPublishedDate={lastPublishedDate}
            author={author}
            getPage={mockedGetPage}
          />
        )).toJSON();
      expect(mockedGetPage).toHaveBeenCalledWith(mockJournalPage.match.params.pageId);
      expect(tree).toMatchSnapshot();
    });

    it('error page with 404 status code.', () => {
      const error = { response: { status: 404 }, message: '' };
      const tree = renderer
        .create((
          <JournalPageWrapper
            error={error}
          />
        ));
      expect(tree).toMatchSnapshot();
    });

    it('error page with 403 status code.', () => {
      const error = { response: { status: 403 }, message: '' };
      const tree = renderer
        .create((
          <JournalPageWrapper
            error={error}
          />
        ));
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Data fetching', () => {
    it('not finished and checks the loading page.', () => {
      const finishedFetching = false;
      const tree = renderer
        .create((
          <JournalPageWrapper
            finishedFetching={finishedFetching}
          />
        ));
      expect(tree).toMatchSnapshot();
    });

    it('not finished and test the trackVisit function.', () => {
      const tree = mount((
        <JournalPageWrapper />
      ));
      // testing "componentDidUpdate" function
      const newProps = Object.assign({}, mockJournalPage);
      const mockedSetPageVisit = jest.fn();

      // mocked the 'ScrollIntoView' function and adding a div in body.
      const mockedScrollIntoView = jest.fn();
      window.HTMLElement.prototype.scrollIntoView = mockedScrollIntoView;
      document.body.innerHTML = '<div class="header"></div>';

      newProps.pageId = 12;
      newProps.match.params.pageId = '2';
      newProps.setPageVisit = mockedSetPageVisit;

      tree.setProps(newProps);
      expect(mockedScrollIntoView).toHaveBeenCalled();
      expect(mockedSetPageVisit).toHaveBeenCalledWith(
        newProps.userId,
        newProps.match.params.pageId,
        newProps.match.params.journalAboutId,
      );
    });
  });
});
