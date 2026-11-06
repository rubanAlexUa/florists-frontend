import Image from 'next/image';
import Link from 'next/link';
import css from './ProductCard.module.css';
import {useProductsCartStore} from '@/lib/store/cartStore';
import {
  BackendPlantsTypes,
  getPlantsTypeByBackend,
  PlantsTypes,
} from '@/constants/plantsTypes';
export type ProductCardData = {
  id: string;
  name: string;
  price: number;
  productImage: string;
  href: string;
  type: BackendPlantsTypes | 'bouquet';
  amount: number;
};

const ProductCard = ({
  id,
  name,
  price,
  productImage,
  href,
  type,
  amount,
}: ProductCardData) => {
  const products = useProductsCartStore(state => state.products);
  const addProduct = useProductsCartStore(state => state.addProduct);

  const isInProducts = products.some(
    cartProduct => cartProduct.productId === id,
  );

  const normalType =
    type === 'bouquet' ? 'bouquets' : getPlantsTypeByBackend(type);

  const productURL = productImage
    ? productImage
    : type === 'bouquet'
      ? '/default-bouquet-img.png'
      : '/default-plant-img.png';
  return (
    <li key={id} className={css['product-card']}>
      <Link href={href}>
        <Image
          className={css['product-image']}
          src={productURL}
          height={432}
          width={500}
          alt="plat iamge"
          quality={100}
          sizes="216px"
        />
        <div className={css['card-info']}>
          <h3 className={css['product-name']}>{name}</h3>
          <p className={css['product-price']}>${price}</p>
        </div>
      </Link>
      {!isInProducts ? (
        <button
          className={css['add-cart-button']}
          onClick={e => {
            addProduct({
              name,
              productId: id,
              pricePerOne: price,
              productImage: productURL,
              type: normalType,
              amount,
            });
          }}>
          <svg
            width={50}
            height={50}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z"
              fill="#F9F6F0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#E5E0D8"
            />
            <path
              d="M16 9.99994V21.9999"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#E5E0D8"
            />
            <path
              d="M10 16H22"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#E5E0D8"
            />
          </svg>
        </button>
      ) : (
        <Link href="/cart" className={css['button-go-cart']}>
          Go to Cart
        </Link>
      )}
    </li>
  );
};

export default ProductCard;
