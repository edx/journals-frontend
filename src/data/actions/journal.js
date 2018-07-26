import 'whatwg-fetch';

import {
  STARTED_FETCHING_JOURNAL,
  FINISHED_FETCHING_JOURNAL,
  GET_JOURNAL_SUCCESS,
  GET_JOURNAL_FAILURE,
} from '../constants/actionTypes/journal';

import JournalsApiService from '../services/JournalsApiService';

const startedFetchingJournal = () => (
  {
    type: STARTED_FETCHING_JOURNAL,
  }
);

const finishedFetchingJournal = () => (
  {
    type: FINISHED_FETCHING_JOURNAL,
  }
);

const getJournalSuccess = journal => (
  {
    type: GET_JOURNAL_SUCCESS,
    journal,
  }
);

const getJournalFailure = error => (
  {
    type: GET_JOURNAL_FAILURE,
    error,
  }
);

const fetchJournal = id => (
  (dispatch) => {
    dispatch(startedFetchingJournal());
    return JournalsApiService.fetchJournalPage(id)
      .then((response) => {
        dispatch(getJournalSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getJournalFailure(error));
      })
      .finally(() => {
        dispatch(finishedFetchingJournal());
      });
  }
);

export default fetchJournal;
