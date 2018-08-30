import {
  STARTED_SEARCHING,
  FINISHED_SEARCHING,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_FAILURE,
  SET_FILTER,
} from '../constants/actionTypes/search';

const searchResults = (state = {
  meta: {},
  hits: [],
  startedFetching: false,
  finishedFetching: false,
  journalId: 0,
  query: '',
  operator: 'or',
  filter: 'all',
  error: null,
}, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    case GET_SEARCH_SUCCESS:
      return {
        ...state,
        hits: action.hits,
        meta: action.meta,
      };
    case GET_SEARCH_FAILURE:
      return {
        ...state,
        error: action.error,
        hits: [],
      };
    case STARTED_SEARCHING:
      return {
        ...state,
        error: null,
        startedFetching: true,
        finishedFetching: false,
        journalId: action.journalId,
        query: action.query,
        operator: action.operator,
        filter: action.filter,
      };
    case FINISHED_SEARCHING:
      return {
        ...state,
        startedFetching: false,
        finishedFetching: true,
      };
    default:
      return state;
  }
};

export default searchResults;
