const mockJournalAbout = {
  accessLength: 0,
  cardImageUrl: '',
  customContent: '<h2>Content Title</h2><p>Custom content details</p>',
  error: null,
  finishedFetching: true,
  heroImageUrl: '',
  journalAboutId: 5,
  journalId: 3,
  longDescription: 'Long description of journal',
  price: '0',
  purchaseUrl: 'http://purchase.example.com/',
  shortDescription: 'Short description of journal',
  startedFetching: false,
  title: 'Title of journal about page',
  structure: [
    {
      id: 6,
      title: 'Title of journal page 1',
      url: 'http://example.com/page1',
      children: [
        {
          id: 8,
          title: 'Title of journal page 1 child',
          url: 'http://example.com/page1child',
          children: [
            {
              id: 9,
              title: 'Title of journal page 1 grand child',
              url: 'http://example.com/page1grandchild',
              children: null,
            },
          ],
        },
      ],
    },
    {
      id: 7,
      title: 'Title of journal page 2',
      url: 'http://example.com/page2',
    },
  ],
};

export default mockJournalAbout;
