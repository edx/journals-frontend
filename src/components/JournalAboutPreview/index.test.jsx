import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import JournalAboutPage from './index';
import mockJournalAbout from './../JournalAboutPage/JournalAbout.mock';

const match = { params: { previewId: '3' }, url: '' };
const JournalAboutPageWrapper = props => (
  <MemoryRouter>
    <JournalAboutPage
      previewPage={mockJournalAbout}
      finishedFetching
      serverBaseUrl="example.com/user"
      authorizedJournals={[mockJournalAbout.journalId]}
      match={match}
      {...props}
    />
  </MemoryRouter>
);

describe('<JournalAboutPreview />', () => {
  it('renders correctly the JournalAbout page in preview mode.', () => {
    const tree = renderer
      .create((
        <JournalAboutPageWrapper />
      )).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

