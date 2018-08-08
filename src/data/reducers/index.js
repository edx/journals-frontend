import { combineReducers } from 'redux';

import page from './page';
import preview from './preview';
import journal from './journal';
import journals from './journals';
import navigation from './navigation';
import userInfo from './userInfo';


const rootReducer = combineReducers({
  page,
  preview,
  navigation,
  journals,
  journal,
  userInfo,
});

export default rootReducer;
