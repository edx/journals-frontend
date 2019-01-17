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

  static fetchJournalIndexPage() {
    const options = {
      fields: '*',
      type: 'journals.JournalIndexPage',
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

  static createAccount(email, username, password) {
    return axios.post(`${JournalsApiService.apiUrl}/useraccount/`, {
      email,
      username,
      password,
    }, {
      withCredentials: true,
      headers: {
        'X-CSRFToken': getCookieValue('journals_csrftoken'),
      },
    });
  }

  static loginAccount(username, password) {
    return axios.post(`${JournalsApiService.apiUrl}/useraccount/`, {
      login: true,
      username,
      password,
    }, {
      withCredentials: true,
      headers: {
        'X-CSRFToken': getCookieValue('journals_csrftoken'),
      },
    });
  }

  static logoutAccount() {
    return axios.post(`${JournalsApiService.apiUrl}/useraccount/`, {
      logout: true,
    }, {
      withCredentials: true,
      headers: {
        'X-CSRFToken': getCookieValue('journals_csrftoken'),
      },
    });
  }

  static fetchSearchResults(journalId, query, operator) {
    // Note, not passing filter to server for now, will filter on client side
    const options = { query, operator };

    let searchPath = null;

    if (journalId === undefined || journalId === null || journalId === 0) {
      // if no journal specified, search across all journals user has access to
      searchPath = `${JournalsApiService.apiUrl}/search/?${qs.stringify(options)}`;
    } else {
      // else search in specific journal
      searchPath = `${JournalsApiService.apiUrl}/search/${journalId}/?${qs.stringify(options)}`;
    }

    return axios.get(searchPath, {
      withCredentials: true,
    });
  }
}

export default JournalsApiService;
