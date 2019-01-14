import {
  STARTED_FETCHING_SITE_INFO,
  FINISHED_FETCHING_SITE_INFO,
  GET_SITE_INFO_SUCCESS,
  GET_SITE_INFO_FAILURE,
  UPDATE_PAGE_VISIT,
} from '../constants/actionTypes/siteInfo';

import configuration from '../../config/';

const siteInfo = (state = {
  username: '',
  userId: null,
  visitedPages: [],
  themeName: '',
  logo: '',
  footerLinks: [],
  serverBaseUrl: configuration.JOURNALS_BASE_URL,
  error: null,
  isAuthenticated: false,
  startedFetching: false,
  finishedFetching: false,
  authorizedJournals: [],
  lmsIntegration: true,
}, action) => {
  switch (action.type) {
    case GET_SITE_INFO_SUCCESS:
      return {
        ...state,
        username: action.siteInfo.user.username,
        userId: action.siteInfo.user.id,
        canAccessAdmin: action.siteInfo.user.can_access_admin,
        isAuthenticated: action.siteInfo.is_authenticated,
        visitedPages: action.siteInfo.visited_pages,
        themeName: action.siteInfo.theme_name,
        logo: action.siteInfo.logo,
        footerLinks: action.siteInfo.footer_links,
        serverBaseUrl: action.siteInfo.server_url,
        lmsRootUrl: action.siteInfo.lms_url_root,
        authorizedJournals: action.siteInfo.authorized_journals,
        lmsIntegration: action.siteInfo.lms_integration,
      };
    case GET_SITE_INFO_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: action.error,
      };
    case STARTED_FETCHING_SITE_INFO:
      return {
        ...state,
        error: null,
        startedFetching: true,
        finishedFetching: false,
      };
    case FINISHED_FETCHING_SITE_INFO:
      return {
        ...state,
        startedFetching: false,
        finishedFetching: true,
      };
    case UPDATE_PAGE_VISIT: {
      const updatedVisited = state.visitedPages.map((lastVisitedEntry) => {
        if (lastVisitedEntry.journal_about === parseInt(action.aboutPageId, 10)) {
          return {
            user: action.userId,
            page: parseInt(action.pageId, 10),
            journal_about: parseInt(action.aboutPageId, 10),
          };
        }
        return lastVisitedEntry;
      });
      return {
        ...state,
        visitedPages: updatedVisited,
      };
    }
    default:
      return state;
  }
};

export default siteInfo;
