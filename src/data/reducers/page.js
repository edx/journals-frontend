import {
  GET_PAGE_SUCCESS,
  GET_PAGE_FAILURE,
  STARTED_FETCHING_PAGE,
  FINISHED_FETCHING_PAGE,
} from '../constants/actionTypes/page';

const page = (state = {
  page: {},
  startedFetching: false,
  finishedFetching: false,
}, action) => {
  switch (action.type) {
    case GET_PAGE_SUCCESS:
      return {
        ...state,
        page: action.page,
      };
    case GET_PAGE_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case STARTED_FETCHING_PAGE:
      return {
        ...state,
        startedFetching: true,
        finishedFetching: false,
      };
    case FINISHED_FETCHING_PAGE:
      return {
        ...state,
        startedFetching: false,
        finishedFetching: true,
      };
    default:
      return state;
  }
};

export default page;
