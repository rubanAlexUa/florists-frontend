import css from './Cart.module.css';
import CartContent from '@/components/CartContent/CartContent';

const Cart = () => {
  return (
    <div className="wrapper">
      <div className={css['page-info']}>
        <h2 className="page-heading">Your Cart</h2>
      </div>
      <CartContent />
    </div>
  );
};

export default Cart;
