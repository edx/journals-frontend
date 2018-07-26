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
  id: null,
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
        id: action.journal.id,
        structure: action.journal.structure,
      };
    case GET_JOURNAL_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case STARTED_FETCHING_JOURNAL:
      return {
        ...state,
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
