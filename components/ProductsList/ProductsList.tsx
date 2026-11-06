import ProductCard, { ProductCardData } from "../ProductCard/ProductCard";
import css from "./ProductList.module.css";

type Props = {
  products: ProductCardData[] | undefined;
};

const ProductsList = ({ products }: Props) => {
  return (
    <ul className={css["products-list"]}>
      {products?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </ul>
  );
};

export default ProductsList;
