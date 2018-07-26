import { combineReducers } from 'redux';

import page from './page';
import journal from './journal';
import journals from './journals';
import navigation from './navigation';
import userInfo from './userInfo';


const rootReducer = combineReducers({
  page,
  navigation,
  journals,
  journal,
  userInfo,
});

export default rootReducer;
