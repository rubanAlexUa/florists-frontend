'use client';
import Link from 'next/link';
import Image from 'next/image';

import css from './OrderItem.module.css';
import {useProductsCartStore} from '@/lib/store/cartStore';
import {PlantsTypes} from '@/constants/plantsTypes';

type Props = {
  product: {
    name: string;
    amount: number;
    pricePerOne: number;
    productImage: string;
    type: PlantsTypes | 'bouquets';
    productId: string;
  };
};

const OrderItem = ({product}: Props) => {
  const {name, amount, type, pricePerOne, productId, productImage} = product;
  const href = `/catalogue/${type}/${productId}`;
  const deleteProduct = useProductsCartStore(state => state.deleteProduct);

  return (
    <li className={css['order-item']}>
      <div className={css['all-product-info-box']}>
        <div className={css['image-product-wrapper']}>
          <Link href={href}>
            <Image
              className={css['product-image']}
              src={productImage}
              width={150}
              height={150}
              alt="products image"
            />
          </Link>
        </div>

        <div className={css['product-info-box']}>
          <div className={css['top-wrapper']}>
            <h3 className={css['product-name']}>{name}</h3>
            <h3 className={css['product-total-price']}>
              Total price: {pricePerOne * amount}$
            </h3>
          </div>
          <div className={css['bottom-wrapper']}>
            <div className={css['add-info']}>
              <h3>
                Price per one:
                <span className={css['product-add-info-num']}>
                  {pricePerOne}$
                </span>
              </h3>
              <h3>
                Amount:
                <span className={css['product-add-info-num']}>{amount}$</span>
              </h3>
            </div>
            <button
              className={css['button-delete-product']}
              onClick={() => deleteProduct(productId)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default OrderItem;
