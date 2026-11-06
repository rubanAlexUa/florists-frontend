import Link from 'next/link';
import {useProductsCartStore} from '@/lib/store/cartStore';
import css from './CartSummary.module.css';
import Bin from '@/public/bin.svg';

const CartSummary = () => {
  const totalProducts = useProductsCartStore(state =>
    state.products.reduce(
      (totalAmount, product) => (totalAmount += product.amount),
      0,
    ),
  );

  const totalPrice = useProductsCartStore(state =>
    state.products.reduce(
      (totalAmount, product) =>
        (totalAmount += product.pricePerOne * product.amount),
      0,
    ),
  );

  const clearCart = useProductsCartStore(state => state.clearProducts);

  return (
    <div className={css['cart-summary-box']}>
      <div className={css['products-amount-box']}>
        <p className={css['products-amount-text']}>Products amount</p>
        <p className={css['products-amount-number']}>{totalProducts}</p>
      </div>
      <hr className={css.divider} />
      <div className={css['products-summary-button-box']}>
        <h2 className={css['total-price-text']}>
          Total price:
          <span className={css['total-price-number']}>{totalPrice}</span>
        </h2>
        <div className={css['buttons-wrapper']}>
          <button
            onClick={() => clearCart()}
            className={`${css['delete-all-button']} ${css['button-action']}`}>
            <Bin className={css['svg-bin']} />
            Clear cart
          </button>
          <Link
            href="/order"
            className={`${css['go-order-button']} ${css['button-action']}`}>
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
