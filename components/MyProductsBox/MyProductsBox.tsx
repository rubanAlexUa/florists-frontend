import MyProductsSwiper from '../MyProductsSwiper/MyProductsSwiper';
import css from './MyProductsBox.module.css';

const MyProductsBox = () => {
  return (
    <div className={css['my-products-box']}>
      <h2 className="box-heading">Your Products</h2>
      <MyProductsSwiper />
    </div>
  );
};

export default MyProductsBox;
