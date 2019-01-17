import 'whatwg-fetch';

import {
  STARTED_CREATING_ACCOUNT,
  FINISHED_CREATING_ACCOUNT,
  GET_ACCOUNT_CREATION_SUCCESS,
  GET_ACCOUNT_CREATION_FAILURE,
  STARTED_LOGIN_ACCOUNT,
  FINISHED_LOGIN_ACCOUNT,
  GET_ACCOUNT_LOGIN_SUCCESS,
  GET_ACCOUNT_LOGIN_FAILURE,
  STARTED_LOGOUT_ACCOUNT,
  FINISHED_LOGOUT_ACCOUNT,
  GET_ACCOUNT_LOGOUT_SUCCESS,
  GET_ACCOUNT_LOGOUT_FAILURE,
} from '../constants/actionTypes/account';


import JournalsApiService from '../services/JournalsApiService';
import fetchSiteInfo from './siteInfo';

const startedCreatingAccount = () => (
  {
    type: STARTED_CREATING_ACCOUNT,
  }
);

const finishedCreatingAccount = () => (
  {
    type: FINISHED_CREATING_ACCOUNT,
  }
);

const getAccountCreationSuccess = accountInfo => (
  {
    type: GET_ACCOUNT_CREATION_SUCCESS,
    accountInfo,
  }
);

const getAccountCreationFailure = error => (
  {
    type: GET_ACCOUNT_CREATION_FAILURE,
    error,
  }
);

const startedLoginAccount = () => (
  {
    type: STARTED_LOGIN_ACCOUNT,
  }
);

const finishedLoginAccount = () => (
  {
    type: FINISHED_LOGIN_ACCOUNT,
  }
);

const getAccountLoginSuccess = accountInfo => (
  {
    type: GET_ACCOUNT_LOGIN_SUCCESS,
    accountInfo,
  }
);

const getAccountLoginFailure = error => (
  {
    type: GET_ACCOUNT_LOGIN_FAILURE,
    error,
  }
);

const startedLogoutAccount = () => (
  {
    type: STARTED_LOGOUT_ACCOUNT,
  }
);

const finishedLogoutAccount = () => (
  {
    type: FINISHED_LOGOUT_ACCOUNT,
  }
);

const getAccountLogoutSuccess = accountInfo => (
  {
    type: GET_ACCOUNT_LOGOUT_SUCCESS,
    accountInfo,
  }
);

const getAccountLogoutFailure = error => (
  {
    type: GET_ACCOUNT_LOGOUT_FAILURE,
    error,
  }
);

const createAccount = (email, username, password) => (
  (dispatch) => {
    dispatch(startedCreatingAccount());
    return JournalsApiService.createAccount(email, username, password)
      .then((response) => {
        dispatch(getAccountCreationSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getAccountCreationFailure(error));
      })
      .finally(() => {
        dispatch(finishedCreatingAccount());
        // update the site info so it gets latest user information
        dispatch(fetchSiteInfo());
      });
  }
);

const loginAccount = (email, password) => (
  (dispatch) => {
    dispatch(startedLoginAccount());
    return JournalsApiService.loginAccount(email, password)
      .then((response) => {
        dispatch(getAccountLoginSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getAccountLoginFailure(error));
      })
      .finally(() => {
        dispatch(finishedLoginAccount());
        // update the site info so it gets latest user information
        dispatch(fetchSiteInfo());
      });
  }
);

const logoutAccount = () => (
  (dispatch) => {
    dispatch(startedLogoutAccount());
    return JournalsApiService.logoutAccount()
      .then((response) => {
        dispatch(getAccountLogoutSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getAccountLogoutFailure(error));
      })
      .finally(() => {
        dispatch(finishedLogoutAccount());
        // update the site info so it gets latest user information
        dispatch(fetchSiteInfo());
      });
  }
);

export { createAccount, loginAccount, logoutAccount };
