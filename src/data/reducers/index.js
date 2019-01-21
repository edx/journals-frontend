import { combineReducers } from 'redux';

import page from './page';
import preview from './preview';
import previewAbout from './journalAboutPreview';
import journal from './journal';
import journals from './journals';
import navigation from './navigation';
import siteInfo from './siteInfo';
import searchResults from './search';


const rootReducer = combineReducers({
  page,
  preview,
  previewAbout,
  navigation,
  journals,
  journal,
  searchResults,
  siteInfo,
});

export default rootReducer;
