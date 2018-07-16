import axios from 'axios';
import qs from 'query-string';

import settings from '../configuration/constants';

class JournalPageApiService {
  static get pagesUrl(){
    return settings.journalsBackendBaseUrl + '/api/v1/content/pages/';
  }

  // Used for both JournalPage and JournalAboutPages
  static fetchJournalPage(pageId){
    return axios.get(JournalPageApiService.pagesUrl + pageId, {
      withCredentials: true,
    })
  }

  static fetchAllJournals(){
    const options = {
      fields: '*',
      type: 'journals.JournalAboutPage',
    }
    return axios.get(JournalPageApiService.pagesUrl + '?' + qs.stringify(options), {
      withCredentials: true,
    })
  }
}

export default JournalPageApiService;
