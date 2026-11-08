import { api } from "./api";

interface createPurchasePrors {
  products: purchaseProduct[];
}

interface purchaseProduct {
  productId: string;
  amount: number;
}

export const createPurchase = async ({ products }: createPurchasePrors) => {
  const res = await api.post("/purchases", products);
  return res.data;
};
