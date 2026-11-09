'use client';
import {useQuery} from '@tanstack/react-query';
import css from './SellersOrdersBox.module.css';
import {getAllOrders} from '@/lib/orders';
import SellersOrdersList from '../SellersOrdersList/SellersOrdersList';

const SellersOrdersBox = () => {
  return (
    <div className={css['my-orders-box']}>
      <h2 className={css['my-orders-heading']}>My orders</h2>
      <SellersOrdersList />
    </div>
  );
};

export default SellersOrdersBox;
