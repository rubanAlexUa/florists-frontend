'use client';

import {useUserStore} from '@/lib/store/userStore';
import {useRouter} from 'next/navigation';
import {useEffect} from 'react';
import {useQuery} from '@tanstack/react-query';
import {getMe} from '@/lib/auth';

const SellerOnly = ({children}: {children: React.ReactNode}) => {
  const router = useRouter();

  const {
    data: user,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () => getMe(),
    retry: false,
  });
  const allowed = user?.role === 'seller';

  useEffect(() => {
    if (isPending) return;
    if (isError) router.replace('/log-in');
    else if (!allowed) router.push('/');
  }, [isPending, isError, router, allowed]);

  if (isPending || !allowed) return null;
  return <>{children}</>;
};

export default SellerOnly;
