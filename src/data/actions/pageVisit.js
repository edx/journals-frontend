import JournalsApiService from '../services/JournalsApiService';

const setPageVisit = (userId, pageId) => (
  JournalsApiService.setPageVisit(userId, pageId)
);

export default setPageVisit;
