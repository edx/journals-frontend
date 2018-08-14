import { combineReducers } from 'redux';

import page from './page';
import preview from './preview';
import journal from './journal';
import journals from './journals';
import navigation from './navigation';
import siteInfo from './siteInfo';


const rootReducer = combineReducers({
  page,
  preview,
  navigation,
  journals,
  journal,
  siteInfo,
});

export default rootReducer;
