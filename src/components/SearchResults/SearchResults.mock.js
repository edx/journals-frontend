import {
  FILTER_ID_ALL, FILTER_ID_DOCUMENTS, FILTER_ID_IMAGES, FILTER_ID_VIDEOS,
} from '../../data/constants/filterTypes';

const mockSearchResults = {
  meta: {
    total_count: 3,
    text_count: 0,
    image_count: 1,
    video_count: 1,
    doc_count: 1,
  },
  hits: [
    {
      block_id: 15,
      block_title: 'block 1',
      block_type: 'pdf',
      breadcrumbs: ['x', 'y'],
      highlights: [
        '1 <b>foo </b>',
        '2 <b>foo </b>',
        '3 <b>foo </b>',
        '4 <b>foo </b>',
        '5 <b>foo </b>',
      ],
      journal_about_page_id: 12,
      journal_id: 5,
      journal_name: 'new journal',
      page_id: 15,
      page_title: 'pdf document foo',
      score: '2.1442184',
      span_id: '',
    },
    {
      page_id: 13,
      page_title: 'video',
      breadcrumbs: [],
      journal_about_page_id: 12,
      journal_id: 5,
      journal_name: 'new journal',
      block_id: 2,
      block_title: 'Science and Cooking Chef Profile: JOSÉ ANDRÉS',
      block_type: 'xblock_video',
      highlights: [
        'video-title: performance director <b>foo</b>',
      ],
      score: '1.2321665',
      span_id: 'xblock_video-c81e728d9d4c2f636f067f89cc14862c',
    },
    {
      page_id: 13,
      page_title: 'a page',
      breadcrumbs: [],
      journal_about_page_id: 12,
      journal_id: 5,
      journal_name: 'new journal',
      block_id: 1,
      block_title: 'image-title: foo',
      block_type: 'image',
      highlights: [
        'image-title: <b>foo</b>',
      ],
      score: '12.110976',
      span_id: 'image-c4ca4238a0b923820dcc509a6f75849b',
    },
  ],
};

const mockGetResultCount = jest.fn((filter) => {
  switch (filter) {
    case FILTER_ID_ALL:
      return mockSearchResults.hits.total_count;
    case FILTER_ID_DOCUMENTS:
      return mockSearchResults.hits.doc_count;
    case FILTER_ID_IMAGES:
      return mockSearchResults.hits.image_count;
    case FILTER_ID_VIDEOS:
      return mockSearchResults.hits.video_count;
    default:
      return 0;
  }
});

export { mockGetResultCount, mockSearchResults };

