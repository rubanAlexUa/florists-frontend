'use client';

import {useQuery} from '@tanstack/react-query';
import css from './SellersOrdersList.module.css';
import {getAllOrders} from '@/lib/orders';
import SellersOrdersItem from '../SellersOrdersItem/SellersOrdersItem';

const SellersOrdersList = () => {
  const {data, isLoading, isError} = useQuery({
    queryKey: ['my-orders'],
    queryFn: getAllOrders,
  });

  return (
    <ul className={css['my-orders-list']}>
      {data?.orders.map(order => (
        <SellersOrdersItem order={order} />
      ))}
    </ul>
  );
};

export default SellersOrdersList;
