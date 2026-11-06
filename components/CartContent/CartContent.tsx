'use client';
import css from './CartContent.module.css';
import CartProductsList from '@/components/CartProductsList/CartProductsList';
import {useProductsCartStore} from '@/lib/store/cartStore';
import CartNoItems from '@/components/CartNoItems/CartNoItems';
import CartSummary from '../CartSummary/CartSummary';
const CartContent = () => {
  const isCartEmpty =
    useProductsCartStore(state => state.products).length === 0;

  return !isCartEmpty ? (
    <>
      <CartProductsList />
      <CartSummary />
    </>
  ) : (
    <CartNoItems />
  );
};

export default CartContent;
