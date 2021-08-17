import axios from 'axios';

export function configureAxios(sessionId: string, url: string) {
  axios.defaults.baseURL = url;
  axios.interceptors.request.use(function (config) {
    config.headers.Authorization = sessionId;
    config.headers.common['Access-Control-Allow-Origin'] = '*';
    return config;
  });
}
