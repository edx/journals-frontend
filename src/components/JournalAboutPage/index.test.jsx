import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import JournalAboutPage from './index';
import mockJournalAbout from './JournalAbout.mock';

const JournalAboutPageWrapper = props => (
  <MemoryRouter>
    <JournalAboutPage
      journal={mockJournalAbout}
      serverBaseUrl="example.com/user"
      authorizedJournals={[mockJournalAbout.journalId]}
      {...props}
    />
  </MemoryRouter>
);

describe('<JournalAboutPage />', () => {
  it('renders loading page when page is not finished fetching.', () => {
    const newJournalAbout = Object.assign({}, mockJournalAbout);
    newJournalAbout.startedFetching = true;
    const tree = renderer
      .create((
        <JournalAboutPageWrapper
          journal={newJournalAbout}
        />
      )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders page correctly with authorized journal id', () => {
    const tree = renderer
      .create((
        <JournalAboutPageWrapper />
      )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders page correctly without authorized journal id', () => {
    const tree = renderer
      .create((
        <JournalAboutPageWrapper
          authorizedJournals={[]}
        />
      )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the empty page.', () => {
    const newJournalAbout = Object.assign({}, mockJournalAbout);
    newJournalAbout.finishedFetching = false;
    const tree = renderer
      .create((
        <JournalAboutPageWrapper
          journal={newJournalAbout}
        />
      )).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

