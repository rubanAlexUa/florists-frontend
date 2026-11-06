"use client";
import CartProductsList from "@/components/CartProductsList/CartProductsList";
import { useProductsCartStore } from "@/lib/store/cartStore";
import css from "./Cart.module.css";
import CartNoItems from "@/components/CartNoItems/CartNoItems";

const Cart = () => {
  const isCartEmpty =
    useProductsCartStore((state) => state.products).length === 0;

  return (
    <div className="wrapper">
      <div className={css["page-info"]}>
        <h2 className="page-heading">Your Cart</h2>
      </div>
      {!isCartEmpty ? <CartProductsList /> : <CartNoItems />}
    </div>
  );
};

export default Cart;
