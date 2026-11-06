import { CartProduct, useProductsCartStore } from "@/lib/store/cartStore";
import CardListsItem from "../CartListsItem/CartListsItem";
import css from "./CartProductsList.module.css";

const CartProductsList = () => {
  const products = useProductsCartStore((state) => state.products);

  return (
    <ul className={css["cart-products-list"]}>
      {products.map((product) => (
        <CardListsItem key={product.productId} product={product} />
      ))}
    </ul>
  );
};

export default CartProductsList;
