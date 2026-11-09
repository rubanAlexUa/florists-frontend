import ProfileInfo from '@/components/ProfileInfo/ProfileInfo';
import PurchaseList from '@/components/PurchaseList/PurchaseList';
import css from './Profile.module.css';

const Profile = () => {
  return (
    <div className="wrapper">
      <div className={css['customer-content']}>
        <ProfileInfo />
        <PurchaseList />
      </div>
    </div>
  );
};

export default Profile;
