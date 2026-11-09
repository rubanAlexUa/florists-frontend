import {Order} from '@/types/orders';
import {api} from './api';

export interface OrderGetAll {
  page: number;
  perPage: number;
  orders: Order[];
  totalOrders: number;
  totalPages: number;
}

export const getAllOrders = async () => {
  const res = await api.get<OrderGetAll>('/orders');
  return res.data;
};
