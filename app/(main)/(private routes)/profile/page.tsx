import ProfileInfo from '@/components/ProfileInfo/ProfileInfo';
import PurchaseList from '@/components/PurchaseList/PurchaseList';
import css from './Profile.module.css';
import SellersOrdersBox from '@/components/SellersOrdersBox/SellersOrdersBox';
import SellerOnly from '@/components/SellerOnly/SellerOnly';

const Profile = () => {
  return (
    <div className="wrapper">
      <SellerOnly>
        <SellersOrdersBox />
      </SellerOnly>
      <div className={css['customer-content']}>
        <ProfileInfo />
        <PurchaseList />
      </div>
    </div>
  );
};

export default Profile;
