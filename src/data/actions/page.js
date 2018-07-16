import 'whatwg-fetch';

import {
  STARTED_FETCHING_PAGE,
  FINISHED_FETCHING_PAGE,
  GET_PAGE,
} from '../constants/actionTypes/page';

import settings from '../configuration/constants';

import JournalPageApiService from '../services/JournalPageApiService';

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

const getPage = page => (
  {
    type: GET_PAGE,
    page,
  }
);

const fetchJournal = (id) => (
  (dispatch) => {
    dispatch(startedFetchingPage());
    return JournalPageApiService.fetchJournalPage(id)
      .then(response => {
        dispatch(getPage(response.data));
        dispatch(finishedFetchingPage());
      })
  }
);

export {
  startedFetchingPage,
  finishedFetchingPage,
  getPage,
  fetchPage,
};
