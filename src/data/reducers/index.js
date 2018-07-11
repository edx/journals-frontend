import { combineReducers } from 'redux';

import journals from './journals';
import navigation from './navigation';

const rootReducer = combineReducers({
  journals,
  navigation,
});

export default rootReducer;
