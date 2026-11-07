'use client';

import {useProductsCartStore} from '@/lib/store/cartStore';
import css from './OrderList.module.css';
import OrderItem from '../OrderItem/OrderItem';

const OrderList = () => {
  const products = useProductsCartStore(state => state.products);

  return (
    <ul className={css['order-list']}>
      {products.map(product => (
        <OrderItem key={product.productId} product={product} />
      ))}
    </ul>
  );
};

export default OrderList;
