import Image from "next/image";
import Link from "next/link";
import css from "./ProductCard.module.css";
import { useProductsCartStore } from "@/lib/store/cartStore";
import {
  BackendPlantsTypes,
  getPlantsTypeByBackend,
  PlantsTypes,
} from "@/constants/plantsTypes";
import Plus from "@/public/plus.svg";

export type ProductCardData = {
  id: string;
  name: string;
  price: number;
  productImage: string;
  href: string;
  type: BackendPlantsTypes | "bouquet";
  amount: number;
  state: "active" | "archived";
};

const ProductCard = ({
  id,
  name,
  price,
  productImage,
  href,
  type,
  amount,
  state,
}: ProductCardData) => {
  const products = useProductsCartStore((state) => state.products);
  const addProduct = useProductsCartStore((state) => state.addProduct);

  const isInProducts = products.some(
    (cartProduct) => cartProduct.productId === id,
  );

  const normalType =
    type === "bouquet" ? "bouquets" : getPlantsTypeByBackend(type);

  const productURL = productImage
    ? productImage
    : type === "bouquet"
      ? "/default-bouquet-img.png"
      : "/default-plant-img.png";

  const archived = state === "archived";
  return (
    <li key={id} className={css["product-card"]}>
      <Link href={href}>
        <Image
          className={`${archived ? css["archived-product-image"] : ""} ${css["product-image"]}`}
          src={productURL}
          height={432}
          width={500}
          alt="plat iamge"
          quality={100}
          sizes="216px"
        />
        <div className={css["card-info"]}>
          <h3 className={css["product-name"]}>{name}</h3>
          <p className={css["product-price"]}>${price}</p>
        </div>
      </Link>
      {!archived ? (
        !isInProducts ? (
          <button
            className={css["add-cart-button"]}
            onClick={() => {
              addProduct({
                name,
                productId: id,
                pricePerOne: price,
                productImage: productURL,
                type: normalType,
                amount,
              });
            }}
          >
            <Plus className={css["add-cart-svg"]} />
          </button>
        ) : (
          <Link href="/cart" className={css["button-go-cart"]}>
            Go to Cart
          </Link>
        )
      ) : (
        <p className={css["no-products-p"]}>Out of stock!</p>
      )}
    </li>
  );
};

export default ProductCard;
