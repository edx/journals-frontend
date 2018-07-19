import 'whatwg-fetch';

import {
  STARTED_FETCHING_USER_INFO,
  FINISHED_FETCHING_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILURE,
} from '../constants/actionTypes/userInfo';

import JournalsApiService from '../services/JournalsApiService';

const startedFetchingUserInfo = () => (
  {
    type: STARTED_FETCHING_USER_INFO,
  }
);

const finishedFetchingUserInfo = () => (
  {
    type: FINISHED_FETCHING_USER_INFO,
  }
);

const getUserInfoSuccess = userInfo => (
  {
    type: GET_USER_INFO_SUCCESS,
    userInfo,
    isAuthenticated: true,
  }
);

const getUserInfoFailure = error => (
  {
    type: GET_USER_INFO_FAILURE,
    isAuthenticated: false,
    error,
  }
);

const fetchUserInfo = () => (
  (dispatch) => {
    dispatch(startedFetchingUserInfo());
    return JournalsApiService.fetchUserInfo()
      .then((response) => {
        dispatch(getUserInfoSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getUserInfoFailure(error));
      })
      .finally(() => {
        dispatch(finishedFetchingUserInfo());
      });
  }
);

export default fetchUserInfo;
