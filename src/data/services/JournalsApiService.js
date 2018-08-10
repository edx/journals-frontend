import axios from 'axios';
import qs from 'query-string';

import store from '../store';

import configuration from '../../config/';

function getCookieValue(name) {
  const value = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
  return value ? value.pop() : '';
}

class JournalsApiService {
  static get apiUrl() {
    const base = store.getState().siteInfo.serverBaseUrl || configuration.JOURNALS_BASE_URL;
    return `${base}/api/v1`;
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

  static fetchSiteInfo() {
    return axios.get(`${JournalsApiService.apiUrl}/siteinfo/`, {
      withCredentials: true,
    });
  }

  static setPageVisit(userId, pageId) {
    return axios.post(`${JournalsApiService.apiUrl}/userpagevisits/`, {
      user: userId,
      page: pageId,
    }, {
      withCredentials: true,
      headers: {
        'X-CSRFToken': getCookieValue('journals_csrftoken'),
      },
    });
  }
}

export default JournalsApiService;
