import ProfileInfo from '@/components/ProfileInfo/ProfileInfo';
import PurchaseList from '@/components/PurchaseList/PurchaseList';
import css from './Profile.module.css';
import SellersOrdersBox from '@/components/SellersOrdersBox/SellersOrdersBox';
import SellerBoxesOnly from '@/components/SellerBoxesOnly/SellerBoxesOnly';
import MyProductsBox from '@/components/MyProductsBox/MyProductsBox';

const Profile = () => {
  return (
    <div className="wrapper">
      <SellerBoxesOnly>
        <SellersOrdersBox />
      </SellerBoxesOnly>
      <div className={css['customer-content']}>
        <ProfileInfo />
        <PurchaseList />
      </div>
      <SellerBoxesOnly>
        <MyProductsBox />
      </SellerBoxesOnly>
    </div>
  );
};

export default Profile;
