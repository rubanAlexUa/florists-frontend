import { PlantsTypes } from "@/constants/plantsTypes";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartProduct {
  productId: string;
  productImage: string;
  name: string;
  pricePerOne: number;
  amount: number;
  type: PlantsTypes | "bouquets";
}

interface ProductsCartStore {
  products: CartProduct[];
  addProduct: (product: CartProduct) => void;
  deleteProduct: (productId: string) => void;
  updateProduct: (productId: string, amount: number) => void;
  clearProducts: () => void;
}

export const useProductsCartStore = create<ProductsCartStore>()(
  persist(
    (set) => ({
      products: [],
      addProduct: (product: CartProduct) =>
        set((state) => ({ products: [...state.products, product] })),
      deleteProduct: (productId: string) =>
        set((state) => ({
          products: state.products.filter(
            (product) => product.productId !== productId,
          ),
        })),
      updateProduct: (productId: string, amount: number) =>
        set((state) => ({
          products: state.products.map((product) =>
            product.productId === productId ? { ...product, amount } : product,
          ),
        })),
      clearProducts: () => set(() => ({ products: [] })),
    }),
    { name: "cart" },
  ),
);
