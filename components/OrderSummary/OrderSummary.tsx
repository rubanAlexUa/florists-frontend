"use client";

import { useRouter } from "next/navigation";
import { useProductsCartStore } from "@/lib/store/cartStore";
import css from "./OrderSummary.module.css";
import { createPurchase } from "@/lib/purchases";

const OrderSummary = () => {
  const router = useRouter();

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

  const clearOrder = useProductsCartStore((state) => state.clearProducts);

  const handleSubmit = async () => {
    const { products } = useProductsCartStore.getState();
    const orderProducts = products.map(({ productId, amount }) => ({
      productId,
      amount,
    }));
    try {
      await createPurchase({ products: orderProducts });
      clearOrder();
      router.push("/");
    } catch {}
  };

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
      <button
        onClick={() => handleSubmit()}
        className={css["submit-order-button"]}
      >
        Submit order
      </button>
    </div>
  );
};

export default OrderSummary;
