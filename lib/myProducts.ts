import {api} from './api';

export interface MyProduct {
  _id: string;
  name: string;
  productImage: string;
  price: string;
}

export const getAllMyProducts = async () => {
  const res = await api.get<MyProduct[]>('/products/my');
  return res.data;
};
