import 'whatwg-fetch';

import {
  STARTED_FETCHING_PAGE,
  FINISHED_FETCHING_PAGE,
  GET_PAGE_SUCCESS,
  GET_PAGE_FAILURE,
} from '../constants/actionTypes/page';

import JournalsApiService from '../services/JournalsApiService';

const startedFetchingPage = () => (
  {
    type: STARTED_FETCHING_PAGE,
  }
);

const finishedFetchingPage = () => (
  {
    type: FINISHED_FETCHING_PAGE,
  }
);

const getPageSuccess = page => (
  {
    type: GET_PAGE_SUCCESS,
    page,
  }
);

const getPageFailure = error => (
  {
    type: GET_PAGE_FAILURE,
    error,
  }
);

const fetchPage = id => (
  (dispatch) => {
    dispatch(startedFetchingPage());
    return JournalsApiService.fetchJournalPage(id)
      .then((response) => {
        dispatch(getPageSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getPageFailure(error));
      })
      .finally(() => {
        dispatch(finishedFetchingPage());
      });
  }
);

export default fetchPage;
