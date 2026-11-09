import axios from 'axios';
import {api} from './api';
import {Purchase} from '@/types/purchase';

interface createPurchasePrors {
  products: purchaseProduct[];
}

interface purchaseProduct {
  productId: string;
  amount: number;
}

export const createPurchase = async ({products}: createPurchasePrors) => {
  const res = await api.post('/purchases', products);
  return res.data;
};

export const getAllPurchases = async () => {
  const res = await api.get<Purchase[]>('/purchases');
  return res.data;
};
