import {
  STARTED_FETCHING_USER_INFO,
  FINISHED_FETCHING_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE,
} from '../constants/actionTypes/userInfo';

const userInfo = (state = {
  username: '',
  visitedPages: [],
  isAuthenticated: false,
  startedFetching: false,
  finishedFetching: false,
}, action) => {
  switch (action.type) {
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        username: action.userInfo.username,
        visitedPages: action.userInfo.visited_pages,
        isAuthenticated: true,
      };
    case GET_USER_INFO_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
      };
    case STARTED_FETCHING_USER_INFO:
      return {
        ...state,
        startedFetching: true,
        finishedFetching: false,
      };
    case FINISHED_FETCHING_USER_INFO:
      return {
        ...state,
        startedFetching: false,
        finishedFetching: true,
      };
    default:
      return state;
  }
};

export default userInfo;
