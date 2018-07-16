import {
  GET_JOURNAL,
  STARTED_FETCHING_JOURNAL,
  FINISHED_FETCHING_JOURNAL,
} from '../constants/actionTypes/journal';

const journal = (state = {
  journal: {},
  startedFetching: false,
  finishedFetching: false,
}, action) => {
  switch (action.type) {
    case GET_JOURNAL:
      return {
        ...state,
        currentPage: action.page
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
