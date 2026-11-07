import {api} from './api';
import {User} from '@/types/user';
import {USER_ROLES} from '@/constants/userRoles';

interface RegisterProps {
  username?: string;
  email: string;
  password: string;
  role: USER_ROLES;
}

export const registration = async (data: RegisterProps) => {
  const res = await api.post<User>('/auth/register', data);
  return res.data;
};

interface LoginProps {
  email: string;
  passwod: string;
}

export const login = async (data: LoginProps) => {
  const res = await api.post<User>('/auth/login', data);
  return res.data;
};

export const refresh = async () => {
  await api.post('/auth/refresh');
};

export const logout = async () => {
  await api.post('/auth/logout');
};

export const getMe = async () => {
  const res = await api.get<User>('/user/me');
  return res.data;
};
