import {api} from './api';

export const getUserById = async (customerId: string) => {
  const res = await api.get(`/users/${customerId}`);
  return res.data;
};
