import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';

import JournalPreview from './index';
import mockJournalPage from './../JournalPage/JournalPage.mock';


const mockStore = configureMockStore([thunk]);
const store = mockStore({ siteInfo: { serverBaseUrl: 'example.com' } });
const JournalPreviewWrapper = props => (
  <MemoryRouter>
    <Provider store={store}>
      <JournalPreview
        {...mockJournalPage}
        {...props}
      />
    </Provider>
  </MemoryRouter>
);

describe('<JournalPreview />', () => {
  describe('Data fetching finished', () => {
    it('test the journal page opens in preview mode.', () => {
      const tree = mount(<JournalPreviewWrapper
        is_preview
      />);
      // next and previous buttons don't exit.
      expect(tree.find('.page-nav-btns').children().length).toEqual(0);
    });
  });
});
