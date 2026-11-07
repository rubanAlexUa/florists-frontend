"use client";

import { useProductsCartStore } from "@/lib/store/cartStore";
import css from "./OrderSummary.module.css";

const OrderSummary = () => {
  const totalAmount = useProductsCartStore((state) =>
    state.products.reduce(
      (totalAmount, product) => (totalAmount += product.amount),
      0,
    ),
  );

  const totalPrice = useProductsCartStore((state) =>
    state.products.reduce(
      (totalPrice, product) =>
        (totalPrice += product.pricePerOne * product.amount),
      0,
    ),
  );

  return (
    <div className={css["order-summary-box"]}>
      <h2 className={css["summary-heading"]}>Order summary</h2>
      <h3 className={css["all-products-amount"]}>
        Items: <span>{totalAmount}</span>
      </h3>
      <hr />

      <h3 className={css["total-price-order"]}>
        Total price:{" "}
        <span className={css["total-price-number"]}>{totalPrice}</span>
      </h3>
      <button className={css["submit-order-button"]}>Submit order</button>
    </div>
  );
};

export default OrderSummary;
