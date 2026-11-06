"use client";
import { CartProduct } from "@/lib/store/cartStore";
import { useProductsCartStore } from "@/lib/store/cartStore";
import { useRouter } from "next/navigation";

export const useAddToCart = () => {
  const router = useRouter();
  const addProduct = useProductsCartStore((state) => state.addProduct);

  const addToCart = (product: CartProduct) => {
    addProduct(product);
    router.push("/cart");
  };

  return addToCart;
};
