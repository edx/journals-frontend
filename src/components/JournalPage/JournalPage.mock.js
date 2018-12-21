
const mockJournalPage = {
  title: 'dummy title',
  subTitle: 'dummy subtitle',
  getPage: jest.fn(),
  setPageVisit: jest.fn(),
  getPreview: jest.fn(),
  is_preview: false,
  startedFetching: true,
  finishedFetching: true,
  breadCrumbs: [{ id: 1, title: 'dummy' }],
  displayLastPublishedDate: false,
  pageId: 1,
  userId: 2,
  nextPage: 3,
  previousPage: 1,
  match: { params: { journalAboutId: '12', pageId: '1', previewId: '13' }, url: 'dummy.com/dummy' },
  body: [],
};

export default mockJournalPage;
