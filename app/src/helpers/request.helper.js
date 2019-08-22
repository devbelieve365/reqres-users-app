import axios from 'axios';
import qs from 'qs';
import {getToken} from './storage.helper';
import {message} from '../constants/app.constant';
import lodash from 'lodash';

const instance = axios.create({
  timeout: 30000,
});

const handleError = error => {
  if (error.response) {
    const msg = lodash.get(error.response, 'data.error.message');
    console.log(msg);
  } else if (error.request) {
    console.log(message.networkError);
  } else {
    console.log(message.unknownError);
  }
};

export default class RequestHelper {
  static async getHeader(config = {}): void {
    const token = await getToken();
    return {
      'Content-Type': 'application/json',
      Authorization: token && `Bearer ${token}`,
      ...config,
    };
  }

  static async get(url: string, params: {}): void {
    const header = await this.getHeader();
    return instance
      .get(url, {
        headers: header,
        params: params,
        paramsSerializer: data => {
          return qs.stringify(data, {arrayFormat: 'repeat'});
        },
      })
      .then(data => {
        return data.data;
      })
      .catch(e => {
        handleError(e);
        throw e;
      });
  }

  static async post(url: string, data, config): void {
    return instance({
      method: 'POST',
      url: url,
      headers: await this.getHeader(config),
      data: data,
    })
      .then(res => {
        return res.data;
      })
      .catch(e => {
        handleError(e);
        throw e;
      });
  }

  static async put(apiUrl: string, data: {}): void {
    return instance({
      method: 'PUT',
      url: apiUrl,
      headers: await this.getHeader(),
      data: data,
    })
      .then(res => {
        return res.data;
      })
      .catch(e => {
        handleError(e);
        throw e;
      });
  }

  static async delete(apiUrl: string, data: {}): void {
    return instance({
      method: 'DELETE',
      url: apiUrl,
      headers: await this.getHeader(),
      data: data,
    })
      .then(res => {
        return res.data;
      })
      .catch(e => {
        handleError(e);
        throw e;
      });
  }
}
