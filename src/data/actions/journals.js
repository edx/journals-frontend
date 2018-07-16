import 'whatwg-fetch';

import {
  STARTED_FETCHING_JOURNALS,
  FINISHED_FETCHING_JOURNALS,
  GET_JOURNALS,
} from '../constants/actionTypes/journals';

import settings from '../configuration/constants';

import JournalPageApiService from '../services/JournalPageApiService';


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

const getJournals = journals => (
  {
    type: GET_JOURNALS,
    journals,
  }
);

const fetchJournals = () => (
  (dispatch) => {
    dispatch(startedFetchingJournals());
    return JournalPageApiService.fetchAllJournals()
      .then(data => {
        dispatch(getJournals(data.data.items));
        dispatch(finishedFetchingJournals());
      })
  }
);

export {
  startedFetchingJournals,
  finishedFetchingJournals,
  getJournals,
  fetchJournals,
};
