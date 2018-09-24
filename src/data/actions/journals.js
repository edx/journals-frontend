import 'whatwg-fetch';

import {
  STARTED_FETCHING_JOURNALS,
  FINISHED_FETCHING_JOURNALS,
  GET_JOURNALS_SUCCESS,
  GET_JOURNALS_FAILURE,
  STARTED_FETCHING_JOURNAL_INDEX,
  FINISHED_FETCHING_JOURNAL_INDEX,
  GET_JOURNAL_INDEX_SUCCESS,
  GET_JOURNAL_INDEX_FAILURE,
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

const startedFetchingJournalIndex = () => (
  {
    type: STARTED_FETCHING_JOURNAL_INDEX,
  }
);

const finishedFetchingJournalIndex = () => (
  {
    type: FINISHED_FETCHING_JOURNAL_INDEX,
  }
);

const getJournalIndexSuccess = journalIndex => (
  {
    type: GET_JOURNAL_INDEX_SUCCESS,
    journalIndex,
  }
);

const getJournalIndexFailure = error => (
  {
    type: GET_JOURNAL_INDEX_FAILURE,
    error,
  }
);

const fetchJournalIndexPage = () => (
  (dispatch) => {
    dispatch(startedFetchingJournalIndex());
    return JournalsApiService.fetchJournalIndexPage()
      .then((data) => {
        dispatch(getJournalIndexSuccess(data.data.items));
      })
      .catch((error) => {
        dispatch(getJournalIndexFailure(error));
      })
      .finally(() => {
        dispatch(finishedFetchingJournalIndex());
      });
  }
);


export {
  fetchJournals,
  fetchJournalIndexPage,
};
