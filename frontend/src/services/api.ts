import axios, { AxiosError } from 'axios';
import { getToken } from './token';

export const getApi = () => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL,
    timeout: import.meta.env.VITE_REQUEST_TIMEOUT
  });

  axiosInstance.interceptors.request.use((req) => {
    const token = getToken();

    if(req.headers && token) {
      req.headers['X-Token'] = token;
    }

    return req;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{error: string}>) => {
      throw error;
    }
  );

  return axiosInstance;
};
