import axios from "axios";
import { User } from "@/types/user";
import { USER_ROLES } from "@/constants/userRoles";

axios.defaults.baseURL = "https://florists-backend.onrender.com";

interface RegisterProps {
  username?: string;
  email: string;
  password: string;
  role: USER_ROLES;
}

export const registration = async (data: RegisterProps) => {
  const res = await axios.post<User>("/auth/register", data);
  return res.data;
};

interface LoginProps {
  email: string;
  passwod: string;
}

export const login = async (data: LoginProps) => {
  const res = await axios.post<User>("/auth/login", data);
  return res.data;
};

export const refresh = () => {};

export const createSession = () => {};
