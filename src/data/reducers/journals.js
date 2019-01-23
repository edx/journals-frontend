import {
  STARTED_FETCHING_JOURNALS,
  FINISHED_FETCHING_JOURNALS,
  GET_JOURNALS_SUCCESS,
  GET_JOURNALS_FAILURE,
  STARTED_FETCHING_JOURNAL_INDEX,
  FINISHED_FETCHING_JOURNAL_INDEX,
  GET_JOURNAL_INDEX_SUCCESS,
  GET_JOURNAL_INDEX_FAILURE,

} from '../constants/actionTypes/journals';

const journals = (state = {
  journals: [],
  journalIndex: {},
  startedFetching: false,
  finishedFetching: false,
  error: null,
  startedFetchingIndex: false,
  finishedFetchingIndex: false,
  journalIndexError: null,
}, action) => {
  switch (action.type) {
    case GET_JOURNALS_SUCCESS:
      return {
        ...state,
        journals: action.journals,
      };
    case GET_JOURNALS_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case STARTED_FETCHING_JOURNALS:
      return {
        ...state,
        error: null,
        startedFetching: true,
        finishedFetching: false,
      };
    case FINISHED_FETCHING_JOURNALS:
      return {
        ...state,
        startedFetching: false,
        finishedFetching: true,
      };
    case GET_JOURNAL_INDEX_SUCCESS:
      return {
        ...state,
        journalIndex: action.journalIndex.length > 0 ? {
          id: action.journalIndex[0].id,
          title: action.journalIndex[0].title,
          intro: action.journalIndex[0].intro,
          heroImageUrl: action.journalIndex[0].hero_image_url,
        } : {},
      };
    case GET_JOURNAL_INDEX_FAILURE:
      return {
        ...state,
        journalIndexError: action.error,
      };
    case STARTED_FETCHING_JOURNAL_INDEX:
      return {
        ...state,
        journalIndexError: null,
        startedFetchingIndex: true,
        finishedFetchingIndex: false,
      };
    case FINISHED_FETCHING_JOURNAL_INDEX:
      return {
        ...state,
        startedFetchingIndex: false,
        finishedFetchingIndex: true,
      };

    default:
      return state;
  }
};

export default journals;
