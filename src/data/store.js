import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { createLogger } from 'redux-logger';
import { createMiddleware } from 'redux-beacon';
import Segment, { identifyUser, trackEvent, trackPageView } from '@redux-beacon/segment';
import { routerMiddleware, LOCATION_CHANGE } from 'react-router-redux';

import { STARTED_SEARCHING } from './constants/actionTypes/search';
import { GET_SITE_INFO_SUCCESS } from './constants/actionTypes/siteInfo';
import initAnalytics from './segment';
import history from './history';
import reducers from './reducers';

const loggerMiddleware = createLogger();
const routerHistoryMiddleware = routerMiddleware(history);

const eventsMap = {
  [LOCATION_CHANGE]: () => {
    if (window.analytics) {
      trackPageView(action => ({ page: action.payload.pathname }));
    }
  },
  [STARTED_SEARCHING]: trackEvent(action => ({
    name: 'Searched',
    properties: {
      query: action.query,
      operator: action.operator,
      filter: action.filter,
    },
  })),
  [GET_SITE_INFO_SUCCESS]: (action) => {
    if (!window.analytics) {
      initAnalytics(action.siteInfo.segment_key);
    }
    identifyUser(data => ({ userId: data.siteInfo.user.username }));
  },
};

const segmentMiddleware = createMiddleware(eventsMap, Segment());

const middleware = [thunkMiddleware, loggerMiddleware, routerHistoryMiddleware, segmentMiddleware];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
