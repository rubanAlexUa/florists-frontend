import css from './CartNoItems.module.css';
import Verity from '@/public/verity.svg';

const CartNoItems = () => {
  return (
    <div className={css['no-item-box']}>
      <h3 className={css['no-items-heading']}>
        Oops there is not any product!
      </h3>
      <p className={css['cart-description']}>
        Here will be displayed all your choosen products. You have not choosed
        any products to cart, so here is nothing
        <Verity className={css['svg-smile']} />
      </p>
    </div>
  );
};

export default CartNoItems;
