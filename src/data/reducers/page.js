import {
  GET_PAGE,
  STARTED_FETCHING_PAGE,
  FINISHED_FETCHING_PAGE,
} from '../constants/actionTypes/page';

const page = (state = {
  page: {},
  startedFetching: false,
  finishedFetching: false,
}, action) => {
  switch (action.type) {
    case GET_PAGE:
      return {
        ...state,
        currentPage: action.page
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
