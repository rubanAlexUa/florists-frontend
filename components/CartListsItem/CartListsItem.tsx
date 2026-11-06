import Image from "next/image";
import Link from "next/link";

import { CartProduct, useProductsCartStore } from "@/lib/store/cartStore";
import css from "./CartListsItem.module.css";
import { PlantsTypes } from "@/constants/plantsTypes";

type Props = {
  product: CartProduct;
};

const CardListsItem = ({ product }: Props) => {
  const { name, pricePerOne, productImage, productId, amount, type } = product;

  const updateProduct = useProductsCartStore((state) => state.updateProduct);
  const deleteProduct = useProductsCartStore((state) => state.deleteProduct);

  return (
    <li className={css["cart-list-item"]}>
      <div className={css["wrapper-image"]}>
        <Link href={`/catalogue/${type}/${productId}`}>
          <Image
            className={css["product-image"]}
            src={productImage}
            alt="product Image"
            width={200}
            height={200}
          />
        </Link>
      </div>
      <div className={css["product-total-info"]}>
        <div className={css["top-wrapper"]}>
          <div className={css["product-info-main"]}>
            <h4 className={`${css["product-name"]} ${css["product-info"]}`}>
              Name: {name}
            </h4>
            <h4
              className={`${css["product-price-one"]} ${css["product-info"]}`}
            >
              Price per one: {pricePerOne}
            </h4>
          </div>
          <h3 className={css["product-totalPrice"]}>
            Price: {pricePerOne * amount}
          </h3>
        </div>

        <div className={css["bottom-wrapper"]}>
          <div className={css["amount-changer"]}>
            <h3 className={css["product-amount-heading"]}>Amount</h3>
            <span className={css.dots}></span>
            <p className={css["product-amount-number"]}>{amount}</p>
            <div className={css["buttons-wrapper"]}>
              <button
                className={`${css["button-increment"]} ${css["button-action"]}`}
                onClick={() => updateProduct(productId, amount + 1)}
              >
                <svg
                  className={css["symbol-action"]}
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 6V18"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className={`${css["button-decrement"]} ${css["button-action"]}`}
                onClick={() => updateProduct(productId, amount - 1)}
                disabled={amount === 1}
              >
                <svg
                  className={css["symbol-action"]}
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12L18 12"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <button
            className={`${css["button-action"]} ${css["button-delete"]}`}
            onClick={() => deleteProduct(productId)}
          >
            DELETE
          </button>
        </div>
      </div>
    </li>
  );
};

export default CardListsItem;
