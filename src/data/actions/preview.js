import 'whatwg-fetch';

import {
  STARTED_FETCHING_PREVIEW,
  FINISHED_FETCHING_PREVIEW,
  GET_PREVIEW_SUCCESS,
  GET_PREVIEW_FAILURE,
} from '../constants/actionTypes/preview';

import JournalsApiService from '../services/JournalsApiService';

const startedFetchingPreview = () => (
  {
    type: STARTED_FETCHING_PREVIEW,
  }
);

const finishedFetchingPreview = () => (
  {
    type: FINISHED_FETCHING_PREVIEW,
  }
);

const getPreviewSuccess = page => (
  {
    type: GET_PREVIEW_SUCCESS,
    page,
  }
);

const getPreviewFailure = error => (
  {
    type: GET_PREVIEW_FAILURE,
    error,
  }
);

const fetchPreview = id => (
  (dispatch) => {
    dispatch(startedFetchingPreview());
    return JournalsApiService.fetchJournalPreview(id)
      .then((response) => {
        dispatch(getPreviewSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getPreviewFailure(error));
      })
      .finally(() => {
        dispatch(finishedFetchingPreview());
      });
  }
);

export default fetchPreview;
