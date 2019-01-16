import { combineReducers } from 'redux';

import account from './account';
import page from './page';
import preview from './preview';
import journal from './journal';
import journals from './journals';
import navigation from './navigation';
import siteInfo from './siteInfo';
import searchResults from './search';


const rootReducer = combineReducers({
  page,
  preview,
  navigation,
  journals,
  journal,
  searchResults,
  siteInfo,
  account,
});

export default rootReducer;
