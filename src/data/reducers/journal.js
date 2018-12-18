import {
  GET_JOURNAL_SUCCESS,
  GET_JOURNAL_FAILURE,
  STARTED_FETCHING_JOURNAL,
  FINISHED_FETCHING_JOURNAL,
} from '../constants/actionTypes/journal';

const journal = (state = {
  title: '',
  shortDescription: '',
  longDescription: '',
  cardImageUrl: '',
  heroImageUrl: '',
  customContent: '',
  journalAboutId: null,
  journalId: null,
  purchaseUrl: '',
  price: '0',
  accessLength: 0,
  structure: [],
  startedFetching: false,
  finishedFetching: false,
  error: null,
}, action) => {
  switch (action.type) {
    case GET_JOURNAL_SUCCESS:
      return {
        ...state,
        title: action.journal.title,
        shortDescription: action.journal.short_description,
        longDescription: action.journal.long_description,
        cardImageUrl: action.journal.card_image_url,
        heroImageUrl: action.journal.hero_image_url,
        customContent: action.journal.custom_content,
        journalAboutId: action.journal.id,
        journalId: action.journal.journal_id,
        structure: action.journal.structure,
        purchaseUrl: action.journal.purchase_url,
        price: action.journal.price,
        accessLength: action.journal.access_length,
      };
    case GET_JOURNAL_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case STARTED_FETCHING_JOURNAL:
      return {
        ...state,
        error: null,
        startedFetching: true,
        finishedFetching: false,
      };
    case FINISHED_FETCHING_JOURNAL:
      return {
        ...state,
        startedFetching: false,
        finishedFetching: true,
      };
    default:
      return state;
  }
};

export default journal;
