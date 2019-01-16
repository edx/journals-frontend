import {
  STARTED_CREATING_ACCOUNT,
  FINISHED_CREATING_ACCOUNT,
  GET_ACCOUNT_CREATION_SUCCESS,
  GET_ACCOUNT_CREATION_FAILURE,
  STARTED_LOGIN_ACCOUNT,
  FINISHED_LOGIN_ACCOUNT,
  GET_ACCOUNT_LOGIN_SUCCESS,
  GET_ACCOUNT_LOGIN_FAILURE,
} from '../constants/actionTypes/account';

const INITIAL_STATE = {
  email: '',
  username: '',
  startedCreating: false,
  finishedCreating: false,
  errorCreating: null,
  startedLogin: false,
  finishedLogin: false,
  errorLogin: null,
};

const account = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ACCOUNT_CREATION_SUCCESS:
      return {
        ...state,
        email: action.accountInfo.email,
        username: action.accountInfo.username,
      };
    case GET_ACCOUNT_CREATION_FAILURE:
      return {
        ...state,
        email: '',
        username: '',
        errorCreating: action.error,
      };
    case STARTED_CREATING_ACCOUNT:
      return {
        ...state,
        errorCreating: null,
        startedCreating: true,
        finishedCreating: false,
      };
    case FINISHED_CREATING_ACCOUNT:
      return {
        ...state,
        startedCreating: false,
        finishedCreating: true,
      };
    case GET_ACCOUNT_LOGIN_SUCCESS:
      return {
        ...state,
        email: action.accountInfo.email,
        username: action.accountInfo.username,
      };
    case GET_ACCOUNT_LOGIN_FAILURE:
      return {
        ...state,
        errorLogin: action.error,
      };
    case STARTED_LOGIN_ACCOUNT:
      return {
        ...state,
        errorLogin: null,
        startedLogin: true,
        finishedLogin: false,
      };
    case FINISHED_LOGIN_ACCOUNT:
      return {
        ...state,
        startedLogin: false,
        finishedLogin: true,
      };

    default:
      return state;
  }
};

export default account;
