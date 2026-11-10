import ProfileInfo from "@/components/ProfileInfo/ProfileInfo";
import PurchaseList from "@/components/PurchaseList/PurchaseList";
import css from "./Profile.module.css";
import SellersOrdersBox from "@/components/SellersOrdersBox/SellersOrdersBox";
import SellerBoxesOnly from "@/components/SellerBoxesOnly/SellerBoxesOnly";

const Profile = () => {
  return (
    <div className="wrapper">
      <SellerBoxesOnly>
        <SellersOrdersBox />
      </SellerBoxesOnly>
      <div className={css["customer-content"]}>
        <ProfileInfo />
        <PurchaseList />
      </div>
    </div>
  );
};

export default Profile;
