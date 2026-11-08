import {create} from 'zustand';
import {persist} from 'zustand/middleware';

// const initialValue: UserGet = {
//   username: "",
//   email: "",
// };

export interface UserGet {
  username: string;
  email: string;
  role: 'customer' | 'seller';
}

interface userStore {
  user: UserGet | null;
  setUser: (user: UserGet) => void;
  logoutUser: () => void;
}

export const useUserStore = create<userStore>()(
  persist(
    set => ({
      user: null,
      setUser: (user: UserGet) => set(() => ({user})),
      logoutUser: () => set(() => ({user: null})),
    }),
    {name: 'user'},
  ),
);
