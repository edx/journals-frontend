import {
  STARTED_FETCHING_JOURNALS,
  FINISHED_FETCHING_JOURNALS,
  GET_JOURNALS_SUCCESS,
  GET_JOURNALS_FAILURE,
} from '../constants/actionTypes/journals';

const journals = (state = {
  journals: [],
  startedFetching: false,
  finishedFetching: false,
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
