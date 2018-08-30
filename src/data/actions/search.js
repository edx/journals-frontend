import {
  STARTED_SEARCHING,
  FINISHED_SEARCHING,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_FAILURE,
  SET_FILTER,
} from '../constants/actionTypes/search';

import JournalsApiService from '../services/JournalsApiService';


const startedSearching = (journalId, query, operator, filter) => (
  {
    type: STARTED_SEARCHING,
    journalId,
    query,
    operator,
    filter,
  }
);

const finishedSearching = () => (
  {
    type: FINISHED_SEARCHING,
  }
);

const getSearchSuccess = (meta, hits) => (
  {
    type: GET_SEARCH_SUCCESS,
    meta,
    hits,
  }
);

const getSearchFailure = error => (
  {
    type: GET_SEARCH_FAILURE,
    error,
  }
);

const setFilter = filter => (
  {
    type: SET_FILTER,
    filter,
  }
);

const fetchSearchResults = (journalId, query, operator, filter) => (
  (dispatch) => {
    dispatch(startedSearching(journalId, query, operator, filter));
    return JournalsApiService.fetchSearchResults(journalId, query, operator)
      .then((response) => {
        dispatch(getSearchSuccess(response.data.meta, response.data.hits));
      })
      .catch((error) => {
        dispatch(getSearchFailure(error));
      })
      .finally(() => {
        dispatch(finishedSearching());
      });
  }
);

export {
  setFilter,
  fetchSearchResults,
};
