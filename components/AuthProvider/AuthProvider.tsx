'use client';
import {useEffect} from 'react';
import {getMe} from '@/lib/auth';
import {useUserStore} from '@/lib/store/userStore';

const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const setUser = useUserStore(s => s.setUser);
  const logoutUser = useUserStore(s => s.logoutUser);

  useEffect(() => {
    getMe().then(setUser).catch(logoutUser);
  }, [setUser, logoutUser]);

  return <>{children}</>;
};

export default AuthProvider;
