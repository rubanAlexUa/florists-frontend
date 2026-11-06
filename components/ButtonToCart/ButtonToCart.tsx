"use client";
import { useRouter } from "next/navigation";
import css from "./ButtonToCart.module.css";

const ButtonToCart = () => {
  const router = useRouter();
  return (
    <>
      <button
        className={css["button-go-cart"]}
        onClick={() => router.push("/cart")}
      >
        Go to Cart
      </button>
    </>
  );
};

export default ButtonToCart;
