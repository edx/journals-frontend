import {
  GET_JOURNALS,
  STARTED_FETCHING_JOURNALS,
  FINISHED_FETCHING_JOURNALS,
} from '../constants/actionTypes/journals';

const journals = (state = {
  journals: [],
  startedFetching: false,
  finishedFetching: false,
}, action) => {
  switch (action.type) {
    case GET_JOURNALS:
      return {
        ...state,
        journals: action.journals.items,
      };
    case STARTED_FETCHING_JOURNALS:
      return {
        ...state,
        startedFetching: true,
        finishedFetching: false,
      };
    case FINISHED_FETCHING_JOURNALS:
      return {
        ...state,
        startedFetching: false,
        finishedFetching: true,
      };
    default:
      return state;
  }
};

export default journals;
