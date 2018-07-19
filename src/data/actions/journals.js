import 'whatwg-fetch';

import {
  STARTED_FETCHING_JOURNALS,
  FINISHED_FETCHING_JOURNALS,
  GET_JOURNALS_SUCCESS,
  GET_JOURNALS_FAILURE,
} from '../constants/actionTypes/journals';

import JournalsApiService from '../services/JournalsApiService';


const startedFetchingJournals = () => (
  {
    type: STARTED_FETCHING_JOURNALS,
  }
);

const finishedFetchingJournals = () => (
  {
    type: FINISHED_FETCHING_JOURNALS,
  }
);

const getJournalsSuccess = journals => (
  {
    type: GET_JOURNALS_SUCCESS,
    journals,
  }
);

const getJournalsFailure = error => (
  {
    type: GET_JOURNALS_FAILURE,
    error,
  }
);

const fetchJournals = () => (
  (dispatch) => {
    dispatch(startedFetchingJournals());
    return JournalsApiService.fetchAllJournals()
      .then((data) => {
        dispatch(getJournalsSuccess(data.data.items));
      })
      .catch((error) => {
        dispatch(getJournalsFailure(error));
      })
      .finally(() => {
        dispatch(finishedFetchingJournals());
      });
  }
);

export default fetchJournals;
