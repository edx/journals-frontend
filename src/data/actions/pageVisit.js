import JournalsApiService from '../services/JournalsApiService';
import { UPDATE_PAGE_VISIT } from '../constants/actionTypes/siteInfo';


const updatePageVisit = (userId, pageId, aboutPageId) => (
  {
    type: UPDATE_PAGE_VISIT,
    userId,
    pageId,
    aboutPageId,
  }
);

const setPageVisit = (userId, pageId, aboutPageId) => (
  (dispatch) => {
    dispatch(updatePageVisit(userId, pageId, aboutPageId));
    return JournalsApiService.setPageVisit(userId, pageId);
  }
);

export default setPageVisit;
