import {
  GET_PREVIEW_SUCCESS,
  GET_PREVIEW_FAILURE,
  STARTED_FETCHING_PREVIEW,
  FINISHED_FETCHING_PREVIEW,
} from '../constants/actionTypes/preview';

const preview = (state = {
  page: {},
  startedFetching: false,
  finishedFetching: false,
  error: null,
}, action) => {
  switch (action.type) {
    case GET_PREVIEW_SUCCESS:
      return {
        ...state,
        page: action.page,
      };
    case GET_PREVIEW_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case STARTED_FETCHING_PREVIEW:
      return {
        ...state,
        error: null,
        startedFetching: true,
        finishedFetching: false,
      };
    case FINISHED_FETCHING_PREVIEW:
      return {
        ...state,
        startedFetching: false,
        finishedFetching: true,
      };
    default:
      return state;
  }
};

export default preview;
