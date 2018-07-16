import { combineReducers } from 'redux';

import page from './page';
import journal from './journal';
import journals from './journals';
import navigation from './navigation';

const rootReducer = combineReducers({
  page,
  navigation,
  journals,
  journal,
});

export default rootReducer;
