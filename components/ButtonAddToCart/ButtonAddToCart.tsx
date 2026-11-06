"use client";
import { CartProduct, useProductsCartStore } from "@/lib/store/cartStore";
import css from "./ButtonAddToCart.module.css";
import { useAddToCart } from "@/hooks/useAddToCart";
import ButtonToCart from "../ButtonToCart/ButtonToCart";

type Props = {
  cartProduct: CartProduct;
};

const ButtonAddToCart = ({ cartProduct }: Props) => {
  const products = useProductsCartStore((state) => state.products);

  const isInProducts = products.some(
    (product) => product.productId === cartProduct.productId,
  );
  const addToCart = useAddToCart();
  return !isInProducts ? (
    <button
      className={css["submit-button"]}
      onClick={() => addToCart(cartProduct)}
      disabled={cartProduct.amount === 0}
    >
      Add to cart
    </button>
  ) : (
    <ButtonToCart />
  );
};

export default ButtonAddToCart;
