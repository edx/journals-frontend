import 'whatwg-fetch';

import {
  STARTED_FETCHING_SITE_INFO,
  FINISHED_FETCHING_SITE_INFO,
  GET_SITE_INFO_SUCCESS,
  GET_SITE_INFO_FAILURE,
} from '../constants/actionTypes/siteInfo';

import JournalsApiService from '../services/JournalsApiService';

const startedFetchingSiteInfo = () => (
  {
    type: STARTED_FETCHING_SITE_INFO,
  }
);

const finishedFetchingSiteInfo = () => (
  {
    type: FINISHED_FETCHING_SITE_INFO,
  }
);

const getSiteInfoSuccess = siteInfo => (
  {
    type: GET_SITE_INFO_SUCCESS,
    siteInfo,
    isAuthenticated: true,
  }
);

const getSiteInfoFailure = error => (
  {
    type: GET_SITE_INFO_FAILURE,
    isAuthenticated: false,
    error,
  }
);

const fetchSiteInfo = () => (
  (dispatch) => {
    dispatch(startedFetchingSiteInfo());
    return JournalsApiService.fetchSiteInfo()
      .then((response) => {
        dispatch(getSiteInfoSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getSiteInfoFailure(error));
      })
      .finally(() => {
        dispatch(finishedFetchingSiteInfo());
      });
  }
);

export default fetchSiteInfo;
