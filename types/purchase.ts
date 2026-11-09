export interface Purchase {
  _id: string;
  products: PurchaseProduct;
  totalProducts: number;
  totalPrice: number;
  userId: string;
  createdAt: string;
}

export interface PurchaseProduct {
  _id: string;
  productId: string;
  name: string;
  amount: number;
  price: number;
}
