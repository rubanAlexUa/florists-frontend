'use client';
import {useUserStore} from '@/lib/store/userStore';
import css from './ProfileInfo.module.css';
import ProfileSVG from '@/public/profile.svg';
import {logout} from '@/lib/auth';
import {useRouter} from 'next/navigation';
import {StaticPrefetchDisabled} from 'next/dist/shared/lib/app-router-types';
import {useProductsCartStore} from '@/lib/store/cartStore';

const ProfileInfo = () => {
  const me = useUserStore(state => state.user);
  const logOut = useUserStore(state => state.logoutUser);
  const clearCart = useProductsCartStore(state => state.clearProducts);
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      await logout();
      logOut();
      clearCart();
      router.push('/');
    } catch {}
  };

  return (
    <div className={css['profile-all-info']}>
      <ProfileSVG className={css['profile-svg']} />
      <h3 className={css['profile-username-text']}>{me?.username}</h3>
      <h3 className={css['profile-email-text']}>{me?.email}</h3>
      <hr className={css['hr-elem']} />
      <h3 className={css['profile-role']}>
        Role:{' '}
        <span
          className={`
            ${css['role-elem']}
            ${
              me?.role === 'customer'
                ? css['role-customer']
                : css['role-seller']
            }`}>
          {me?.role}
        </span>
      </h3>
      <hr className={css['hr-elem']} />
      <button className={css['log-out-button']} onClick={handleLogOut}>
        Log out
      </button>
    </div>
  );
};

export default ProfileInfo;
