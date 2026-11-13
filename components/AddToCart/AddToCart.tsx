"use client";
import Image from "next/image";
import css from "./AddToCart.module.css";
import { useState } from "react";
import ButtonAddToCart from "../ButtonAddToCart/ButtonAddToCart";
import { useProductsCartStore } from "@/lib/store/cartStore";
import { useAddToCart } from "@/hooks/useAddToCart";
import { BackendPlantsTypes, PlantsTypes } from "@/constants/plantsTypes";
import ButtonToCart from "../ButtonToCart/ButtonToCart";

export interface Product {
  name: string;
  productId: string;
  productImage: string;
  pricePerOne: number;
  availableAmount: number;
}

type Props = {
  product: Product;
  type: PlantsTypes | "bouquets";
};

const AddToCart = ({ product, type }: Props) => {
  const { name, productId, productImage, pricePerOne, availableAmount } =
    product;

  const products = useProductsCartStore((state) => state.products);

  const isInProducts = products.some(
    (cartProduct) => cartProduct.productId === productId,
  );
  const [amount, setAmount] = useState(0);

  return !isInProducts ? (
    <>
      <div className={css["more-amount-wrapper"]}>
        <h3 className={css["amount-heading"]}>
          Amount
          {availableAmount && (
            <div className={css["available-amount"]}>{availableAmount}</div>
          )}
        </h3>
        <div className={css["amount-info-buttons"]}>
          <p className={css["amount-number"]}>{amount}</p>
          <button
            className={`${css.increment}  ${css["amount-button"]}`}
            onClick={() => setAmount((prev) => prev + 1)}
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18M12 6V18"
                stroke="#d97757"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className={`${css.decrement} ${css["amount-button"]}`}
            onClick={() => setAmount((prev) => prev - 1)}
            disabled={amount === 0}
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L18 12"
                stroke="#d97757"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <ButtonAddToCart
        cartProduct={{
          name,
          productId,
          productImage,
          pricePerOne,
          amount,
          type,
        }}
      />
    </>
  ) : (
    <ButtonToCart />
  );
};

export default AddToCart;
