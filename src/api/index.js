import apiWrapper from './wrapper';

class Api {
  static getAccessToken(payload) {
    const url = '/auth';
    return apiWrapper('get', url, payload);
  }

  static fetchAll(payload) {
    const url = `/query`;
    return apiWrapper('get', url, payload);
  }

  static updateStatus(payload) {
    const url = `/status-update`;
    return apiWrapper('post', url, payload);
  }

}

export default Api;
