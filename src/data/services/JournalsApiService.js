import axios from 'axios';
import qs from 'query-string';

import settings from '../configuration/constants';

class JournalsApiService {
  static get apiUrl() {
    return `${settings.journalsBackendBaseUrl}/api/v1`;
  }

  // Used for both JournalPage and JournalAboutPages
  static fetchJournalPage(pageId) {
    return axios.get(`${JournalsApiService.apiUrl}/content/pages/${pageId}`, {
      withCredentials: true,
    });
  }

  // Fetch Journal Preview
  static fetchJournalPreview(previewId) {
    return axios.get(`${JournalsApiService.apiUrl}/preview/${previewId}`, {
      withCredentials: true,
    });
  }

  static fetchAllJournals() {
    const options = {
      fields: '*',
      type: 'journals.JournalAboutPage',
    };
    return axios.get(`${JournalsApiService.apiUrl}/content/pages/?${qs.stringify(options)}`, {
      withCredentials: true,
    });
  }

  static fetchUserInfo() {
    return axios.get(`${JournalsApiService.apiUrl}/users/current/`, {
      withCredentials: true,
    });
  }
}

export default JournalsApiService;
