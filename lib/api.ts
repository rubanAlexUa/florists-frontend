import axios from 'axios';
import {useUserStore} from '@/lib/store/userStore';

export const api = axios.create({baseURL: '/api'});

let refreshPromise: Promise<unknown> | null = null;

api.interceptors.response.use(
  res => res,
  async error => {
    const original = error.config;
    const isAuthRequest = original?.url?.startsWith('/auth/');

    if (error.response?.status !== 401 || original._retry || isAuthRequest) {
      return Promise.reject(error);
    }
    original._retry = true;

    try {
      refreshPromise ??= api
        .post('/auth/refresh')
        .finally(() => (refreshPromise = null));
      await refreshPromise;
      return api(original);
    } catch (e) {
      useUserStore.getState().logoutUser();
      return Promise.reject(e);
    }
  },
);
