'use client';
import Link from 'next/link';
import Image from 'next/image';

import css from './OrderItem.module.css';
import {useProductsCartStore} from '@/lib/store/cartStore';

type Props = {
  name: string;
  amount: number;
  price: number;
  productImage: string;
  href: string;
  productId: string;
};

const OrderItem = ({
  name,
  amount,
  price,
  productImage,
  href,
  productId,
}: Props) => {
  const deleteProduct = useProductsCartStore(state => state.deleteProduct);

  return (
    <li>
      <div className={css['all-product-info-box']}>
        <Link href={href}>
          <Image
            src={productImage}
            width={100}
            height={100}
            alt="products image"
          />
        </Link>
        <div className={css['product-info-box']}>
          <h3>{name}</h3>
          <h3>Amount: {amount}</h3>
          <h3>Price: {price}</h3>
        </div>
      </div>
      <button
        className={css['button-delete-product']}
        onClick={() => deleteProduct(productId)}>
        Delete from orders
      </button>
    </li>
  );
};

export default OrderItem;
