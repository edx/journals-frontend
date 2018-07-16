import 'whatwg-fetch';

import {
  STARTED_FETCHING_JOURNAL,
  FINISHED_FETCHING_JOURNAL,
  GET_JOURNAL,
} from '../constants/actionTypes/journal';

import settings from '../configuration/constants';

import JournalPageApiService from '../services/JournalPageApiService';

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

const getJournal = journal => (
  {
    type: GET_JOURNAL,
    journal,
  }
);

const fetchJournal = (id) => (
  (dispatch) => {
    dispatch(startedFetchingJournal());
    return JournalPageApiService.fetchJournalPage(id)
      .then(response => {
        dispatch(getJournal(response.data));
        dispatch(finishedFetchingJournal());
      })
  }
);

export {
  startedFetchingJournal,
  finishedFetchingJournal,
  getJournal,
  fetchJournal,
};
