export interface OrderProduct {
  name: string;
  amount: number;
  price: number;
  productId: string;
}

export interface Order {
  customerId: string;
  sellerId: string;
  products: OrderProduct[];
  totalProducts: number;
  totalPrice: number;
  createdAt: string;
}

// export interface Order {
//   customerId: string;
//   sellerId: string;
//   page: number;
//   perPage: number;
//   orders: Order[];
//   totalOrders: number;
//   totalPages: number;
//   createdAt: string;
//   updatedAt: string;
// }
