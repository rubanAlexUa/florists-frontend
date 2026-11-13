import {MyProduct} from '@/lib/myProducts';
import css from './MyProductsSlide.module.css';
import {SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';

type Props = {
  product: MyProduct;
};

const MyProductsSlide = ({product}: Props) => {
  const {productImage, name, price, _id} = product;
  return (
    <div className={css['my-product-slide']}>
      <Image
        className={css['product-image']}
        src={productImage}
        alt="product image"
        width={100}
        height={100}
      />
      <div className={css['my-product-info']}>
        <h3>{name}</h3>
        <h3 className={css['product-price']}>{price} $</h3>
      </div>
      <Link href={`/products/${_id}/edit`} className={css['edit-product-link']}>
        Edit
      </Link>
    </div>
  );
};

export default MyProductsSlide;
