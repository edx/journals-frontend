import 'whatwg-fetch';

import {
  STARTED_FETCHING_JOURNALS,
  FINISHED_FETCHING_JOURNALS,
  GET_JOURNALS,
} from '../constants/actionTypes/journals';

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
    return fetch('http://localhost:18606/api/wagtail/pages/?type=journals.JournalAboutPage&fields=*')
      // TODO: handle response error
      .then(response => response.json())
      .then((data) => {
        dispatch(getJournals(data));
        dispatch(finishedFetchingJournals());
      });
  }
);

export {
  startedFetchingJournals,
  finishedFetchingJournals,
  getJournals,
  fetchJournals,
};
